/**
 * Build a safe embed URL for iframes from a YouTube or Facebook video page URL.
 * @param {string | null | undefined} raw
 * @returns {string | null}
 */
export function getVideoEmbedSrc(raw) {
  if (!raw || typeof raw !== "string") return null;
  const url = raw.trim();
  if (!url) return null;

  if (url.includes("youtube.com/embed/")) {
    try {
      const u = new URL(url);
      const id = u.pathname.split("/embed/")[1]?.split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}${u.search || ""}` : url;
    } catch {
      return url;
    }
  }

  if (url.includes("facebook.com/plugins/video.php")) {
    return url;
  }

  try {
    const withProto = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const u = new URL(withProto);
    const host = u.hostname.replace(/^www\./i, "").toLowerCase();

    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      if (u.pathname.startsWith("/embed/")) {
        const rest = u.pathname.slice("/embed/".length).split("/")[0];
        if (rest) return `https://www.youtube.com/embed/${rest}${u.search || ""}`;
      }
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/shorts/")[1]?.split("/")[0];
        if (id) return `https://www.youtube.com/embed/${id}`;
      }
      if (u.pathname.startsWith("/live/")) {
        const id = u.pathname.split("/live/")[1]?.split("/")[0];
        if (id) return `https://www.youtube.com/embed/${id}`;
      }
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
  } catch {
    /* fall through */
  }

  if (/facebook\.com|fb\.watch|fb\.com/i.test(url)) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      /^https?:\/\//i.test(url) ? url : `https://${url}`
    )}&show_text=false&width=560`;
  }

  return null;
}
