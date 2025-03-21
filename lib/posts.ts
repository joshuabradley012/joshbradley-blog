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
      slug: "rebuilding-this-website",
      title: "Rebuilding This Website",
      description: "The design choices behind building a custom React blog.",
      date: "March 20, 2025",
      component: () =>
        import("../components/posts/Rebuild").then((mod) => mod.default),
    },
    {
      slug: "understanding-the-power-of-lisp",
      title: "Understanding the Power of LISP",
      description:
        "Notable programmers describe understanding and coding in LISP as a semi-religious experience. What gives the language this power?",
      date: "April 3, 2020",
      component: () =>
        import("../components/posts/Lisp").then((mod) => mod.default),
    },
    // Add more posts here
  ];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
