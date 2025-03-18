import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
};

export default function BlogCard({
  title,
  description,
  slug,
  date,
}: BlogCardProps) {
  return (
    <Link
      href={`/thoughts/${slug}`}
      className="mb-6 block rounded-lg border p-6 transition-colors hover:border-blue-500"
    >
      <time className="text-sm text-gray-500">{date}</time>
      <h2 className="mt-2 mb-3 text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
}
