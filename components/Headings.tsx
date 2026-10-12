"use client";

import { cn } from "@/lib/utils";
import { isValidElement } from "react";
import { useHash } from "@/lib/useHash";

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing spaces
}

// Pull the plain text out of heading children like `Simplifying <span>_eval</span>`
function textContent(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textContent).join("");
  }
  if (isValidElement<{ children?: React.ReactNode }>(node)) {
    return textContent(node.props.children);
  }
  return "";
}

function HeadingLink({
  id,
  active,
  children,
}: {
  id: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <a href={`#${id}`} className="group">
      <span
        data-active={active}
        className="xs:pr-2 absolute -top-px -translate-x-full pr-1 font-serif text-neutral-400 italic opacity-0 transition-colors transition-opacity group-hover:opacity-100 hover:text-neutral-900 data-[active=true]:text-neutral-900 data-[active=true]:opacity-100"
        aria-hidden="true"
      >
        §
      </span>
      {children}
    </a>
  );
}

export function H1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("mb-8 text-left font-medium text-neutral-900", className)}
      {...props}
    >
      {props.children}
    </h1>
  );
}

export function H2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? generateId(textContent(props.children));
  const activeHash = useHash();

  return (
    <h2
      id={id}
      className={cn(
        "relative mt-8 text-left font-medium text-neutral-900",
        className,
      )}
      {...props}
    >
      <HeadingLink id={id} active={activeHash === `#${id}`}>
        {props.children}
      </HeadingLink>
    </h2>
  );
}

export function H3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? generateId(textContent(props.children));
  const activeHash = useHash();

  return (
    <h3
      id={id}
      className={cn(
        "relative mt-8 text-left font-medium text-neutral-900",
        className,
      )}
      {...props}
    >
      <HeadingLink id={id} active={activeHash === `#${id}`}>
        {props.children}
      </HeadingLink>
    </h3>
  );
}
