import Link from 'next/link'

type BlogCardProps = {
  title: string
  description: string
  slug: string
  date: string
}

export default function BlogCard({ title, description, slug, date }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="block border rounded-lg p-6 mb-6 hover:border-blue-500 transition-colors"
    >
      <time className="text-sm text-gray-500">{date}</time>
      <h2 className="text-xl font-bold mt-2 mb-3">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </Link>
  )
} 