import { cn } from "@/lib/utils";
import InlineLink from "@/components/InlineLink";

interface BlockQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  author?: string;
  source?: string;
  href?: string;
}

export default function BlockQuote({
  children,
  className,
  author,
  source,
  href,
  ...props
}: BlockQuoteProps) {
  return (
    <blockquote
      className={cn(
        "xs:pl-6 xs:-ml-6 my-8 -ml-4 space-y-4 border-l border-neutral-900 pl-4 font-serif text-base text-neutral-900 italic sm:-ml-8 sm:pl-8 md:-ml-12 md:pl-12",
        className,
      )}
      {...props}
    >
      {children}
      {(author || source) && (
        <footer className="font-sans text-xs text-neutral-500 not-italic">
          &mdash; {author && <span>{author}</span>}
          {author && source && <span>,</span>}{" "}
          {source && !href && <cite className="not-italic">{source}</cite>}
          {source && href && (
            <cite className="not-italic">
              <InlineLink href={href}>{source}</InlineLink>
            </cite>
          )}
        </footer>
      )}
    </blockquote>
  );
}
