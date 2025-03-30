// Feed configuration shared across all feed formats
export const feedConfig = {
  // Site information
  siteTitle: "Josh Bradley",
  siteDescription:
    "A blog about philosophy, technology, spirituality, business, and politics.",
  siteUrl: "https://joshbradley.me",

  // Author information
  authorName: "Josh Bradley",
  authorEmail: "hello@joshbradley.me",

  // Feed paths
  feedPaths: {
    rss: "/api/rss",
    json: "/api/feed",
    atom: "/api/atom",
  },

  // Assets
  logoUrl: "/logo.png",
  ogImage: "/api/og",
  faviconUrl: "/favicon",

  // Other settings
  language: "en",
  copyright: `All rights reserved ${new Date().getFullYear()}, Josh Bradley`,
};

// Helper function to create feed options
export function createFeedOptions() {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    authorName,
    authorEmail,
    feedPaths,
    ogImage,
    faviconUrl,
    language,
    copyright,
  } = feedConfig;

  return {
    title: siteTitle,
    description: siteDescription,
    id: siteUrl,
    link: siteUrl,
    language,
    image: `${siteUrl}${ogImage}`,
    favicon: `${siteUrl}${faviconUrl}`,
    copyright,
    updated: new Date(),
    generator: "Next.js using Feed",
    feedLinks: {
      rss2: `${siteUrl}${feedPaths.rss}`,
      json: `${siteUrl}${feedPaths.json}`,
      atom: `${siteUrl}${feedPaths.atom}`,
    },
    author: {
      name: authorName,
      email: authorEmail,
      link: siteUrl,
    },
  };
}

// Helper function to create feed items from posts
export function createFeedItems(posts: any[], siteUrl: string) {
  const { authorName, authorEmail } = feedConfig;

  return posts.map((post) => ({
    title: post.title,
    id: `${siteUrl}/thoughts/${post.slug}`,
    link: `${siteUrl}/thoughts/${post.slug}`,
    description: post.description,
    date: new Date(post.date),
    author: [
      {
        name: authorName,
        email: authorEmail,
        link: siteUrl,
      },
    ],
  }));
}
