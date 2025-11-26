import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Thoughts",
};

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/thoughts/${post.slug}`}
          className="group relative flex justify-between transition-colors hover:text-neutral-900"
        >
          <div className="absolute top-[10px] left-0 w-full border-t border-neutral-200 transition-colors group-hover:border-neutral-900" />
          <h2 className="relative block bg-neutral-50 pr-2 text-left">
            {post.title}
          </h2>
          <time className="relative ml-2 block bg-neutral-50 pl-2 whitespace-nowrap text-neutral-500 transition-colors group-hover:text-neutral-900">
            {post.date}
          </time>
        </Link>
      ))}
    </div>
  );
}
