import { cn } from "@/lib/utils";

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("max-w-xl mx-auto px-4", className)} {...props} />;
}