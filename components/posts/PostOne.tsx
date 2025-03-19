import CodeBlock from "@/components/ui/CodeBlock";
import InteractiveChart from "@/components/demos/InteractiveChart";
import CounterDemo from "@/components/demos/CounterDemo";
import LoadWrapper from "@/components/LoadWrapper";

export default function InteractiveChartDemo() {
  return (
    <LoadWrapper>
      <p>
        This blog post demonstrates how we can create fully interactive
        components directly within our blog posts. The chart below is built with
        Recharts and has interactive state managed within the component.
      </p>

      <InteractiveChart />

      <CodeBlock
        code={`
\`\`\`jsx
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';

export default async function CodeBlock({ code }: { code: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
\`\`\`
      `}
      />

      <h2 className="mt-8 mb-4 text-2xl font-bold">How It Works</h2>
      <p>
        This entire blog post is a React component, giving us the power to
        include any interactive elements we want. We're using useState hooks to
        track user interactions, and we can include any React libraries we need.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-bold">
        Adding Custom Interactions
      </h2>
      <div className="my-6">
        <CounterDemo />
      </div>

      <p>
        The beauty of this approach is that we can nest custom components within
        our blog posts, keeping our code organized while providing rich,
        interactive experiences for readers.
      </p>
    </LoadWrapper>
  );
}
