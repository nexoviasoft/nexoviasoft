"use client";
import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://nexoviasoft-api.vercel.app";
const getFullUrl = (url) => {
  if (url.startsWith("/")) {
    return `${BASE_URL}${url}`;
  }
  return url;
};

/** url -> { data, isError, error } after settled */
const queryCache = new Map();
/** url -> Promise (in-flight dedupe) */
const inflight = new Map();

/**
 * Prefetch multiple GET endpoints in parallel (deduped with useQuery).
 * @param {string[]} urls
 */
export async function prefetchQueries(urls) {
  await Promise.allSettled(urls.map((url) => fetchQuery(url)));
}

/**
 * @param {string} url
 * @param {{ bypassCache?: boolean }} [opts]
 */
export async function fetchQuery(url, { bypassCache = false } = {}) {
  if (bypassCache) {
    queryCache.delete(url);
  }

  if (!bypassCache && queryCache.has(url)) {
    const c = queryCache.get(url);
    if (c.isError) throw c.error;
    return c.data;
  }

  if (!bypassCache && inflight.has(url)) {
    return inflight.get(url);
  }

  const p = (async () => {
    try {
      const response = await fetch(getFullUrl(url));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      queryCache.set(url, { data: result, isError: false, error: null });
      return result;
    } catch (err) {
      queryCache.set(url, { data: null, isError: true, error: err });
      throw err;
    } finally {
      inflight.delete(url);
    }
  })();

  inflight.set(url, p);
  return p;
}

/**
 * Custom hook for fetching data (GET requests)
 * Mimics RTK Query's useQuery
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Configuration options
 * @param {boolean} [options.skip=false] - If true, the query effectively hangs and doesn't run
 * @param {Array} [options.deps=[]] - Dependency array to trigger refetch
 * @returns {Object} { data, isLoading, isError, error, refetch }
 */
export const useQuery = (url, { skip = false, deps = [] } = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(!skip);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async ({ bypassCache = false } = {}) => {
      if (skip) return;

      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const result = await fetchQuery(url, { bypassCache });
        setData(result);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [url, skip]
  );

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, [fetchData, skip, ...deps]);

  const refetch = useCallback(() => fetchData({ bypassCache: true }), [fetchData]);

  return { data, isLoading, isError, error, refetch };
};

/**
 * Custom hook for mutating data (POST, PUT, DELETE, PATCH)
 * Mimics RTK Query's useMutation
 * @returns {[Function, Object]} [trigger, { data, isLoading, isError, error }]
 */
export const useMutation = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    isError: false,
    error: null,
  });

  const trigger = useCallback(
    async (url, { method = "POST", body, headers = {} } = {}) => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
        isError: false,
        error: null,
      }));

      try {
        const response = await fetch(getFullUrl(url), {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const error = new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
          error.statusCode = response.status;
          error.status = response.status;
          error.data = errorData;
          throw error;
        }

        const result = await response.json();
        setState({
          data: result,
          isLoading: false,
          isError: false,
          error: null,
        });
        return { data: result };
      } catch (err) {
        setState({ data: null, isLoading: false, isError: true, error: err });
        return { error: err };
      }
    },
    []
  );

  return [trigger, state];
};
