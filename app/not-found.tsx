import InlineLink from "@/components/InlineLink";

export default function NotFound() {
  return (
    <>
      <h1 className="mb-8 font-medium text-neutral-900">
        404 - Page Not Found
      </h1>
      <p className="mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <hr />
      <div className="space-y-4 text-xs">
        <InlineLink href="/">Return Home</InlineLink>
      </div>
    </>
  );
}
