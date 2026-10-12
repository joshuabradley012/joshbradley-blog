import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { feedConfig } from "@/lib/feedConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = feedConfig.siteUrl;
  const posts = getAllPosts();

  const pages = ["", "/thoughts", "/projects", "/people", "/quotes"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: path === "/thoughts" ? new Date(posts[0].date) : undefined,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
    }),
  );

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/thoughts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...pages, ...postEntries];
}
