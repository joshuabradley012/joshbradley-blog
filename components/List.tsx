import { cn } from "@/lib/utils";

export function Ul({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("list-disc space-y-1 pl-4", className)} {...props}>
      {children}
    </ul>
  );
}

export function Ol({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={cn("list-decimal space-y-1 pl-4", className)} {...props}>
      {children}
    </ol>
  );
}

export function Li({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("[&_ul]:mt-1", className)} {...props}>
      {children}
    </li>
  );
}
