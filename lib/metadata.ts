import type { Metadata } from "next";
import type { Post } from "@/types";
import { feedConfig } from "@/lib/feedConfig";

export function createMetadata(post: Post): Metadata {
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      url: `${feedConfig.siteUrl}/thoughts/${post.slug}`,
      images: [
        {
          url: post.coverImage || `/api/og/${post.slug}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}
