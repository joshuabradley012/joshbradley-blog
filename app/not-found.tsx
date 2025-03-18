import LoadWrapper from "@/components/LoadWrapper";
import InlineLink from "@/components/ui/InlineLink";

export default function NotFound() {
  return (
    <LoadWrapper>
      <h1 className="mb-8 font-medium text-black">404 - Page Not Found</h1>
      <p className="mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <hr className="my-8 border-neutral-200" />
      <div className="space-y-4 text-xs">
        <InlineLink href="/">Return Home</InlineLink>
      </div>
    </LoadWrapper>
  );
}
