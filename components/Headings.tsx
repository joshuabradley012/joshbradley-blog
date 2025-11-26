"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing spaces
}

function useHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    setActiveHeading(hash);

    const handleHashChange = () => {
      setActiveHeading(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (headingRef.current && !headingRef.current.id) {
      const text = headingRef.current.textContent || "";
      headingRef.current.id = generateId(text);
    }
  }, []);

  return { headingRef, activeHeading };
}

function HeadingLink({
  id,
  active,
  children,
}: {
  id?: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <a href={`#${id}`} className="group">
      <span
        data-active={active}
        className="xs:pr-2 absolute -top-px -translate-x-full pr-1 font-serif text-neutral-400 opacity-0 transition-colors transition-opacity group-hover:opacity-100 hover:text-neutral-900 data-[active=true]:text-neutral-900 data-[active=true]:opacity-100"
        aria-label="Copy link to section"
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
  const { headingRef } = useHeading();

  return (
    <h1
      ref={headingRef}
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
  const { headingRef, activeHeading } = useHeading();

  return (
    <h2
      ref={headingRef}
      className={cn(
        "relative mt-8 text-left font-medium text-neutral-900",
        className,
      )}
      {...props}
    >
      <HeadingLink
        id={headingRef.current?.id}
        active={activeHeading === `#${headingRef.current?.id}`}
      >
        {props.children}
      </HeadingLink>
    </h2>
  );
}

export function H3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  const { headingRef, activeHeading } = useHeading();

  return (
    <h3
      ref={headingRef}
      className={cn(
        "relative mt-8 text-left font-medium text-neutral-900",
        className,
      )}
      {...props}
    >
      <HeadingLink
        id={headingRef.current?.id}
        active={activeHeading === `#${headingRef.current?.id}`}
      >
        {props.children}
      </HeadingLink>
    </h3>
  );
}
