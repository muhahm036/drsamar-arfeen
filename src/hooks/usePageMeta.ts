import { useEffect } from "react";
import { getSiteUrl } from "../utils/contact";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description, path, type = "website" }: PageMeta) {
  useEffect(() => {
    const url = `${getSiteUrl()}${path}`;
    document.title = title;
    document.documentElement.lang = "en";
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", "Dr. Samar Arfeen — Consultant Interventional Cardiologist");
    setMeta("property", "og:locale", "en_PK");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "theme-color", "#0E1F3D");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, type]);
}