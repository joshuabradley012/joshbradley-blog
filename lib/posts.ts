export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  component: () => Promise<any>;
};

export function getAllPosts(): Post[] {
  return [
    {
      slug: "interactive-chart-demo",
      title: "Interactive Chart Demo",
      description:
        "A demonstration of interactive charts built directly in React components",
      date: "March 16, 2025",
      component: () =>
        import("../components/posts/PostOne").then((mod) => mod.default),
    },
    {
      slug: "ai-tools-overview",
      title: "AI Tools Overview",
      description: "Exploring the best AI tools for developers in 2025",
      date: "March 10, 2025",
      component: () =>
        import("../components/posts/PostTwo").then((mod) => mod.default),
    },
    // Add more posts here
  ];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
