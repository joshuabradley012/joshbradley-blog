import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { InlineMath } from "@/components/Math";

const post = getPostBySlug("efficient-ideas");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function EfficientIdeas() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="text-left">
        <p className="pl-4 -indent-4">
          The most impactful ideas are efficient.
        </p>
        <p className="pl-4 -indent-4">
          They strike the exact level of abstraction necessary
        </p>
        <p className="mb-4 pl-8 -indent-4">
          to reduce complexity without losing functionality.
        </p>

        <p className="pl-4 -indent-4">Consider a bubble.</p>
        <p className="pl-4 -indent-4">It will always form a sphere.</p>
        <p className="pl-4 -indent-4">
          It requires the least amount of energy to create.
        </p>
        <p className="pl-4 -indent-4">
          This is why <InlineMath math="\pi" /> appears everywhere in nature:
        </p>
        <p className="pl-8 -indent-4">
          it is the minimal structure needed to prevent collapse,
        </p>
        <p className="mb-4 pl-8 -indent-4">it is efficient.</p>

        <p className="pl-4 -indent-4">
          Though abundant in nature, efficiency is rare in thought.
        </p>
        <p className="pl-4 -indent-4">
          It appears delicate—like one gust of wind could sweep it away.
        </p>
        <p className="pl-4 -indent-4">
          Instead, the mind tends toward castles:
        </p>
        <p className="pl-8 -indent-4">
          complex, robust, insurmountable towers of absolute certainty.
        </p>
        <p className="pl-4 -indent-4">But all things return to dust.</p>
        <p className="mb-4 pl-4 -indent-4">
          And in that rubble, the essential forms are found.
        </p>

        <p className="pl-4 -indent-4">Balls that roll and bounce.</p>
        <p className="pl-4 -indent-4">Rivers that carve mountains down.</p>
        <p className="mb-4 pl-4 -indent-4">
          Delicate instruments that produce sound.
        </p>

        <p className="pl-4 -indent-4">
          The core of a great idea is like a bubble:
        </p>
        <p className="pl-8 -indent-4">
          paper-thin, deceptively simple, and seemingly unstable.
        </p>
        <p className="mb-4 pl-4 -indent-4">
          But the test of time can solidify it into something eternal.
        </p>
      </div>
    </>
  );
}
