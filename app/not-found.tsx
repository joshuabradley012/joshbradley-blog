import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-600">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
