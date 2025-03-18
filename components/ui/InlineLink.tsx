import { cn } from "@/lib/utils";
import Link from "next/link";

export default function InlineLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className={cn("underline transition-colors hover:text-black", className)}
      {...props}
    />
  );
}
