import type { Post } from "@/types";
import { H1 } from "@/components/Headings";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header className="mb-8 flex justify-between">
      <H1 className="mb-0">{post.title}</H1>
      <time className="ml-2 whitespace-nowrap text-neutral-500">
        {post.date}
      </time>
    </header>
  );
}
