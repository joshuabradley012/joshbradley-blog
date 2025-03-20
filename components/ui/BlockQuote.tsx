import { cn } from "@/lib/utils";

interface BlockQuoteProps {
  children: React.ReactNode;
  className?: string;
  author?: string;
  source?: string;
}

export default function BlockQuote({
  children,
  className,
  author,
  source,
}: BlockQuoteProps) {
  return (
    <blockquote
      className={cn(
        "xs:pl-6 xs:-ml-6 -ml-4 space-y-4 border-l border-black pl-4 font-serif italic sm:-ml-8 sm:pl-8 md:-ml-12 md:pl-12",
        className,
      )}
    >
      {children}
      {(author || source) && (
        <footer className="text-xs text-neutral-500 not-italic">
          &mdash; {author && <span>{author}</span>}
          {author && source && <span>,</span>}{" "}
          {source && <cite className="not-italic">{source}</cite>}
        </footer>
      )}
    </blockquote>
  );
}
