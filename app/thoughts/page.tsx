import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import LoadWrapper from "@/components/LoadWrapper";

export const metadata: Metadata = {
  title: "Thoughts",
};

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <LoadWrapper>
      <div className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/thoughts/${post.slug}`}
            className="group relative flex justify-between transition-colors hover:text-black"
          >
            <div className="absolute top-1/2 left-0 w-full border-t border-neutral-200 transition-colors group-hover:border-black" />
            <h2 className="relative block bg-white pr-2">{post.title}</h2>
            <time className="relative block bg-white pl-2 text-neutral-400 transition-colors group-hover:text-black">
              {post.date}
            </time>
          </Link>
        ))}
      </div>
    </LoadWrapper>
  );
}
