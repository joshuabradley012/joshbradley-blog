import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { cn } from "@/lib/utils";
import "katex/dist/katex.min.css";

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-light",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}

export async function BlockCode({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const highlightedCode = await highlightCode(code);
  return (
    <section
      className={cn("my-8 text-xs", className)}
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

export async function InlineCode({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  let highlightedCode = await highlightCode(code);
  highlightedCode = highlightedCode.replace(/^<p>/, "");
  highlightedCode = highlightedCode.replace(/<\/p>$/, "");
  return (
    <span
      className={cn(
        "rounded border border-neutral-200 bg-neutral-50 px-1 py-0.5 text-xs",
        className,
      )}
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}
