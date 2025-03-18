'use client'

import BlogCard from '@/components/ui/BlogCard'
import { getAllPosts } from '@/lib/posts'
import LoadWrapper from '@/components/ui/LoadWrapper'
import InlineLink from '@/components/ui/InlineLink'
import { usePathname } from 'next/navigation'

export default function Thoughts() {
  const pathname = usePathname();
  const posts = getAllPosts();

  return (
    <LoadWrapper>
      <div className="p-24 flex">
        {/* <div className="rounded-full bg-[#5F46BA] w-8 h-8 mb-12" /> */}
        <div className="flex flex-col gap-1 mr-8 text-base text-right">
          <InlineLink href="/" data-active={pathname === "/"} className="text-neutral-400 font-serif italic no-underline data-[active=true]:text-black">about</InlineLink>
          <InlineLink href="/thoughts" data-active={pathname === "/thoughts"} className="text-neutral-400 font-serif italic no-underline data-[active=true]:text-black">thoughts</InlineLink>
          {/* <InlineLink href="/projects" className="font-serif italic no-underline">projects</InlineLink> */}
        </div>
        <div className="max-w-xl pl-8 border-l border-neutral-200">
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
  )
} 