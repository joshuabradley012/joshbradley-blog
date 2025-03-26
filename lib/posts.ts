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
      date: "Mar 20, 2025",
      component: () =>
        import("../components/posts/Rebuild").then((mod) => mod.default),
    },
    {
      slug: "goodbye-procore",
      title: "Goodbye, Procore",
      description:
        "Reflecting on what I learned during my 4 years working for Procore.",
      date: "Nov 21, 2021",
      component: () =>
        import("../components/posts/Procore").then((mod) => mod.default),
    },
    {
      slug: "object-collisions-with-canvas",
      title: "Simulating Object Collisions With Canvas",
      description:
        "Simulating object collisions is a rewarding way to learn the basics of HTML canvas and physics simulation.",
      date: "Jul 25, 2020",
      component: () =>
        import("../components/posts/ObjectCollisions").then(
          (mod) => mod.default,
        ),
    },
    {
      slug: "understanding-the-power-of-lisp",
      title: "Understanding the Power of LISP",
      description:
        "Notable programmers describe understanding and coding in LISP as a semi-religious experience. What gives the language this power?",
      date: "Apr 3, 2020",
      component: () =>
        import("../components/posts/Lisp").then((mod) => mod.default),
    },
    {
      slug: "building-this-website",
      title: "Building This Website",
      description:
        "This site is tiny and powerful, featuring schema markup and ServiceWorkers. Here is what I learned while building it.",
      date: "Jan 27, 2020",
      component: () =>
        import("../components/posts/Build").then((mod) => mod.default),
    },
    // Add more posts here
  ];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
