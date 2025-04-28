import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import BlockQuote from "@/components/BlockQuote";
import InlineLink from "@/components/InlineLink";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";

const post = getPostBySlug("rebuilding-this-website");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function RebuildingThisWebsite() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          This website is a departure from my{" "}
          <InlineLink href="/thoughts/building-this-website">
            old philosophy
          </InlineLink>
          , I have shifted from performance to experience. Previously my website
          was 16kb and loaded in 50-100ms. Blazing fast, minimal, and static. It
          was an experiment in how simple a website could be, and in many ways
          it was delightful. However, its speed didn't make up for its rough
          edges, it was difficult to add custom pages and its design was
          lacking. I considered Substack but found it lacking too. So I sought
          inspiration for a redesign, and while going through{" "}
          <InlineLink href="https://deadsimplesites.com/">
            Dead Simple Sites
          </InlineLink>{" "}
          I found{" "}
          <InlineLink href="https://shud.in/">Shu Ding's website</InlineLink>. I
          borrowed many details, including layout, font choices, and transition
          animations. I believe result is timeless and elegant.
        </p>
        <p>
          I decided to build without MDX or any other content layer. After
          experimenting with MDX, I realized it added subtle constraints that I
          didn't want to be limited by, so I opted for pure React in Next.js.
          This allows me to embed any component anywhere—creating an interactive
          medium through which I can express my ideas. Handcrafted. Simple.
          Expressive. A blank canvas for my thoughts.
        </p>
        <p>
          The next challenge is writing those thoughts. I have many aspirations,
          many old notes which I enjoy sifting through, but it is difficult and
          time consuming to cut and polish them into gems. There is fear too.
          Fear of being judged. Fear of failing. Fear of doing something new.
        </p>
        <p>
          At worst, that fear consumes me—leaving me stranded between my old
          life and my new self. At best, I alchemize it into motivation. Faced
          with the choice between the pain of conformity and the pain of
          individuation, I choose the latter.
        </p>
        <BlockQuote author="William Faulkner">
          <p>
            You cannot swim for new horizons until you have courage to lose
            sight of the shore.
          </p>
        </BlockQuote>
        <p>
          I don't know what lies on the other side of this experience. But I'm
          excited to find out. If you're here, I hope you'll stick around.
          There's more to come—whatever it ends up becoming.
        </p>
      </div>
    </>
  );
}
