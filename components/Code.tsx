import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { cn } from "@/lib/utils";

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
  meta,
  className,
}: {
  code: string;
  meta?: string;
  className?: string;
}) {
  const cleanCode = code
    .replace(/^(\r\n|\r|\n)/, "")
    .replace(/(\r\n|\r|\n)\s*$/, "");
  const highlightedCode = await highlightCode(
    `\`\`\`${meta}\n${cleanCode}\n\`\`\``,
  );
  return (
    <div
      className={cn("my-8 text-xs", className)}
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

export async function InlineCode({
  code,
  meta,
  className,
}: {
  code: string;
  meta?: string;
  className?: string;
}) {
  let highlightedCode = await highlightCode(
    `\`${code}${meta ? `{:${meta}}\`` : "`"}`,
  );
  highlightedCode = highlightedCode.replace(/^<p>/, "");
  highlightedCode = highlightedCode.replace(/<\/p>$/, "");
  return (
    <span
      className={cn(
        "rounded border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs",
        className,
      )}
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}
