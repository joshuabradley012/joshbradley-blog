import type { Post } from "@/types";
import { feedConfig } from "@/lib/feedConfig";

export default function BlogJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: feedConfig.authorName,
      url: feedConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: feedConfig.siteTitle,
      logo: {
        "@type": "ImageObject",
        url: `${feedConfig.siteUrl}${feedConfig.logoUrl || "/logo.png"}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${feedConfig.siteUrl}/thoughts/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
