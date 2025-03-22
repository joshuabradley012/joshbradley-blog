import { cn } from "@/lib/utils";

export function H1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("mb-8 text-left font-medium text-black", className)}
      {...props}
    />
  );
}

export function H2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("mt-8 mb-4 text-left font-medium text-black", className)}
      {...props}
    />
  );
}

export function H3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("mt-8 mb-4 text-left font-medium text-black", className)}
      {...props}
    />
  );
}
