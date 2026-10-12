import { notFound } from "next/navigation";
import type { Post } from "@/types";

const posts: Post[] = [
  {
    slug: "ai-is-inevitable",
    title: "AI is Inevitable",
    description:
      "The economic era we know is ending. This is a natural cycle that all things go through, celebrate what we had and prepare yourself for a new reality. A reality where AI has no boundaries.",
    date: "2025-05-21",
    draft: true,
  },
  {
    slug: "rebuilding-this-website",
    title: "Rebuilding This Website",
    description: "The design choices behind building a custom React blog.",
    date: "2025-03-20",
  },
  {
    slug: "reframing-ambition",
    title: "Reframing Ambition",
    description:
      "Ambition is not about achieving goals, it's about becoming the best version of yourself.",
    date: "2025-03-12",
  },
  {
    slug: "symbiotic-technology",
    title: "Symbiotic Technology",
    description:
      "Technology grows exponentially but understanding grows linearly. The difference is our collective knowledge gap.",
    date: "2025-02-07",
  },
  {
    slug: "lessons-on-startups",
    title: "Lessons on Startups",
    description: "Lessons learned from building a startup.",
    date: "2024-12-04",
  },
  {
    slug: "why-i-founded-celest",
    title: "Why I Founded Celest",
    description: "Why I founded Celest and what I learned from the experience.",
    date: "2024-11-21",
  },
  {
    slug: "efficient-ideas",
    title: "Efficient Ideas",
    description: "The most impactful ideas are efficient, like a bubble.",
    date: "2022-01-12",
  },
  {
    slug: "goodbye-procore",
    title: "Goodbye, Procore",
    description:
      "Reflecting on what I learned during my 4 years working for Procore.",
    date: "2021-11-21",
  },
  {
    slug: "simulating-object-collisions",
    title: "Simulating Object Collisions",
    description:
      "Simulating object collisions is a rewarding way to learn the basics of HTML canvas and physics simulation.",
    date: "2020-07-25",
  },
  {
    slug: "understanding-the-power-of-lisp",
    title: "Understanding the Power of LISP",
    description:
      "Notable programmers describe understanding and coding in LISP as a semi-religious experience. What gives the language this power?",
    date: "2020-04-03",
  },
  {
    slug: "building-this-website",
    title: "Building This Website",
    description:
      "This site is tiny and powerful, featuring schema markup and ServiceWorkers. Here is what I learned while building it.",
    date: "2020-01-27",
  },
];

// Drafts stay reachable in development so they can be previewed.
const showDrafts = process.env.NODE_ENV !== "production";

export function getAllPosts(): Post[] {
  return posts.filter((post) => showDrafts || !post.draft);
}

export function getPostBySlug(slug: string): Post {
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }
  return post;
}

// Call from a post's page component so unpublished posts 404 in production.
export function assertPublished(post: Post) {
  if (post.draft && !showDrafts) {
    notFound();
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
