import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { feedConfig } from "@/lib/feedConfig";
import BlogJsonLd from "@/components/ui/BlogJsonLd";

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
          url: post.coverImage || feedConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Use the simplest form for the page component
export default async function Post(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import the post component
  const PostComponent = dynamic(post.component);

  return (
    <>
      <BlogJsonLd post={post} />
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <time className="text-gray-500">{post.date}</time>
          <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
        </header>
        <PostComponent />
      </article>
    </>
  );
}
