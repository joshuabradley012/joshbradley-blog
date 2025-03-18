"use client";

import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/posts";
import LoadWrapper from "@/components/ui/LoadWrapper";
import InlineLink from "@/components/ui/InlineLink";
import { usePathname } from "next/navigation";

export default function Thoughts() {
  const pathname = usePathname();
  const posts = getAllPosts();

  return (
    <LoadWrapper>
      <div className="flex p-24">
        {/* <div className="rounded-full bg-[#5F46BA] w-8 h-8 mb-12" /> */}
        <div className="mr-8 flex flex-col gap-1 text-right text-base">
          <InlineLink
            href="/"
            data-active={pathname === "/"}
            className="font-serif text-neutral-400 italic no-underline data-[active=true]:text-black"
          >
            about
          </InlineLink>
          <InlineLink
            href="/thoughts"
            data-active={pathname === "/thoughts"}
            className="font-serif text-neutral-400 italic no-underline data-[active=true]:text-black"
          >
            thoughts
          </InlineLink>
          {/* <InlineLink href="/projects" className="font-serif italic no-underline">projects</InlineLink> */}
        </div>
        <div className="max-w-xl border-l border-neutral-200 pl-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </LoadWrapper>
  );
}
