import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { feedConfig } from '../../../lib/feedConfig'
import BlogJsonLd from '../../../components/ui/BlogJsonLd'

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata using Next.js's own type
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {}
  }
  
  // Optionally, you can merge with parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${feedConfig.siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage || feedConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  }
}

// Use the simplest form for the page component
export default async function BlogPost(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  // Dynamically import the post component
  const PostComponent = dynamic(post.component, {
    loading: () => (
      <div className="space-y-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    ),
  })
  
  return (
    <>
      <BlogJsonLd post={post} />
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <time className="text-gray-500">{post.date}</time>
          <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
        </header>
        
        <PostComponent />
      </article>
    </>
  )
}