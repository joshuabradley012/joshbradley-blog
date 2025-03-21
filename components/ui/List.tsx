import { cn } from "@/lib/utils";

export function Ul({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("list-disc pl-4", className)} {...props}>
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
    <ol className={cn("list-decimal pl-4", className)} {...props}>
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
    <li className={className} {...props}>
      {children}
    </li>
  );
}
