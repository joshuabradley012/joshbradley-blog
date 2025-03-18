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
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/thoughts/${post.slug}`}
          className="flex justify-between transition-colors hover:text-black"
        >
          <h2>{post.title}</h2>
          <time className="text-neutral-400">{post.date}</time>
        </Link>
      ))}
    </LoadWrapper>
  );
}
