"use client";

import { useEffect, useState } from "react";
import { prefetchQueries } from "@/hooks/useApi";

/** Endpoints used above the fold / main home sections + layout footer */
const HOME_PREFETCH_URLS = [
  "/hero-crasol",
  "/case-studies",
  "/our-team/public",
  "/customer-review",
  "/footer",
];

export default function HomePageGate({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      await prefetchQueries(HOME_PREFETCH_URLS);
      if (!cancelled) setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 backdrop-blur-md"
        aria-busy="true"
        aria-label="Loading page"
      >
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#d946ef]"
          role="presentation"
        />
        <p className="mt-5 text-sm text-gray-400">Loading content…</p>
      </div>
    );
  }

  return children;
}
