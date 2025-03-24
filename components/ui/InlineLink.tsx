import { cn } from "@/lib/utils";
import Link from "next/link";

export default function InlineLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  if (
    !props.target &&
    typeof props.href === "string" &&
    !props.href.startsWith("/")
  ) {
    props.target = "_blank";
  }
  return (
    <Link
      className={cn("underline transition-colors hover:text-black", className)}
      {...props}
    />
  );
}
