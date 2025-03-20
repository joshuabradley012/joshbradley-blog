import { BlockCode, InlineCode } from "@/components/ui/Code";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import LineChart from "@/components/ui/LineChart";
import CounterDemo from "@/components/demos/CounterDemo";
import LoadWrapper from "@/components/LoadWrapper";
import BlockQuote from "@/components/ui/BlockQuote";
import Figure from "@/components/ui/Figure";

import OGImage from "@/public/og-image.png";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

export default function InteractiveChartDemo() {
  return (
    <LoadWrapper>
      <div className="space-y-4">
        <BlockQuote author="C.S Lewis" source="The Four Loves">
          <p>
            There is no safe investment. To love at all is to be vulnerable.
            Love anything, and your heart will certainly be wrung and possibly
            be broken. If you want to make sure of keeping it intact, you must
            give your heart to no one, not even to an animal. Wrap it carefully
            round with hobbies and little luxuries; avoid all entanglements;
            lock it up safe in the casket of coffin of your selfishness. But in
            that casket-safe, dark, motionless, air-less, it will change. It
            will not be broken; it will become unbreakable, impenetrable,
            irredeemable. The alternative to tragedy, or at least to the risk of
            tragedy, is damnation. The only place outside Heaven where you can
            be perfectly safe from all the dangers and perturbations of love is
            Hell.
          </p>
        </BlockQuote>

        <p>
          This blog post demonstrates how we can create fully interactive
          components directly within our blog posts. The chart below is built
          with Recharts and has interactive state managed within the component.
        </p>

        <LineChart data={data} />

        <p>
          This is an amazing example of an inline code block. Testing to ensure
          it works in the middle of a sentence{" "}
          <InlineCode code="`const array = [1, 2, 3]{:js}`" /> oh hell yeah
          that's a thing. I just want to make sure it works with multiple lines.
          Because that will be a thing.
        </p>

        <BlockCode
          code={`
  \`\`\`jsx showLineNumbers {13-14,48-49} /unified/ title="BlockCode.tsx" caption="This is showing how to create a code block using RSC."
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
  \`\`\`
        `}
        />

        <p>
          Now, let's see how we can use the math renderer. I want to ensure it
          works inline with text, like so:{" "}
          <InlineMath math="\int_0^\infty x^2 dx" />. And also works in block
          quotes. And I need to make sure it works with multiple lines. Just a
          little longer like this.
        </p>

        <BlockMath
          math="f(x) = \int_{-\infty}^{\infty}
          \hat{f}(\xi)e^{2 \pi i \xi x}
          \,d\xi"
        />

        <h2 className="mt-8 font-medium text-black">How It Works</h2>
        <p>
          This entire blog post is a React component, giving us the power to
          include any interactive elements we want. We're using useState hooks
          to track user interactions, and we can include any React libraries we
          need.
        </p>

        <Figure src={OGImage} alt="OG Image" caption="This is a caption" />

        <h2 className="mt-8 font-medium text-black">
          Adding Custom Interactions
        </h2>
        <CounterDemo />

        <p>
          The beauty of this approach is that we can nest custom components
          within our blog posts, keeping our code organized while providing
          rich, interactive experiences for readers.
        </p>
      </div>
    </LoadWrapper>
  );
}
