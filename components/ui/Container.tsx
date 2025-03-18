import { cn } from "@/lib/utils";

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto max-w-xl px-4", className)} {...props} />;
}
