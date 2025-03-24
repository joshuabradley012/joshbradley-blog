import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { feedConfig } from "@/lib/feedConfig";
import BlogJsonLd from "@/components/ui/BlogJsonLd";
import { H1 } from "@/components/ui/Headings";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${feedConfig.siteUrl}/thoughts/${post.slug}`,
      images: [
        {
          url: post.coverImage || `/api/og?title=${post.title}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function Post(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const PostComponent = dynamic(post.component);

  return (
    <>
      <BlogJsonLd post={post} />
      <header className="mb-8 flex justify-between">
        <H1 className="mb-0">{post.title}</H1>
        <time className="ml-2 whitespace-nowrap text-neutral-500">
          {post.date}
        </time>
      </header>
      <PostComponent />
    </>
  );
}
