import type { Post } from "@/types";

export function getAllPosts(): Post[] {
  return [
    {
      slug: "ai-is-inevitable",
      title: "AI is Inevitable",
      description:
        "The economic era we know is ending. This is a natural cycle that all things go through, celebrate what we had and prepare yourself for a new reality. A reality where AI has no boundaries.",
      date: "May 21, 2025",
    },
    {
      slug: "rebuilding-this-website",
      title: "Rebuilding This Website",
      description: "The design choices behind building a custom React blog.",
      date: "Mar 20, 2025",
    },
    {
      slug: "parasitic-technology",
      title: "Parasitic Technology",
      description:
        "Technology grows exponentially but understanding grows linearly. The difference is our collective knowledge gap.",
      date: "Feb 7, 2025",
    },
    {
      slug: "lessons-on-startups",
      title: "Lessons on Startups",
      description: "Lessons learned from building a startup.",
      date: "Dec 4, 2024",
    },
    {
      slug: "efficient-ideas",
      title: "Efficient Ideas",
      description: "The most impactful ideas are efficient, like a bubble.",
      date: "Jan 12, 2022",
    },
    {
      slug: "goodbye-procore",
      title: "Goodbye, Procore",
      description:
        "Reflecting on what I learned during my 4 years working for Procore.",
      date: "Nov 21, 2021",
    },
    {
      slug: "object-collisions-with-canvas",
      title: "Simulating Object Collisions With Canvas",
      description:
        "Simulating object collisions is a rewarding way to learn the basics of HTML canvas and physics simulation.",
      date: "Jul 25, 2020",
    },
    {
      slug: "understanding-the-power-of-lisp",
      title: "Understanding the Power of LISP",
      description:
        "Notable programmers describe understanding and coding in LISP as a semi-religious experience. What gives the language this power?",
      date: "Apr 3, 2020",
    },
    {
      slug: "building-this-website",
      title: "Building This Website",
      description:
        "This site is tiny and powerful, featuring schema markup and ServiceWorkers. Here is what I learned while building it.",
      date: "Jan 27, 2020",
    },
  ];
}

export function getPostBySlug(slug: string): Post {
  const post = getAllPosts().find((post) => post.slug === slug);
  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }
  return post;
}
