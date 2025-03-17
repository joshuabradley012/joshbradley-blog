import BlogCard from '@/components/ui/BlogCard'
import { getAllPosts } from '@/lib/posts'
import HomeWrapper from '@/components/ui/HomeWrapper'

export default function Home() {
  const posts = getAllPosts()
  
  return (
    <HomeWrapper>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div>
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
    </HomeWrapper>
  )
} 