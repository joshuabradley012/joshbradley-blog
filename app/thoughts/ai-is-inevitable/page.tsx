import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { Ol, Li } from "@/components/List";

const post = getPostBySlug("ai-is-inevitable");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function AIIsInevitable() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          The economic era we know is ending. This is a natural cycle that all
          things go through, celebrate what we had and prepare yourself for a
          new reality. A reality where AI has no boundaries.
        </p>

        <p>
          Most people will spend the next 5 years quibbling about AI. How to
          regulate it, how to profit from it, how to avoid its dangers, how to
          prevent the collapse of society, and, most of all, how we're better
          than it. That there is some stronghold of human activity that AI can
          never touch. Creativity. Empathy. Wood carving. Something, anything,
          which we can point to and prove the unique value of humanity.
        </p>

        <p>
          I think all of that worry is a waste of energy. It's better to rip the
          Band-Aid off, right now. Ready?
        </p>

        <p>
          There is nothing you can do that AI can't do better. There is no law,
          barrier, or movement that can stop AI from replacing nearly everything
          you do. Anything you make in the next 5 years will be remade by
          someone typing a single sentence. AI doesn't need our help for most
          tasks. Any conceptual limitation we impose on AI is an illusion.
        </p>

        <p>
          AI is the emperor wearing no clothes. We're all too uncomfortable to
          admit what is staring us in the face. To admit his fault is to admit
          our lie. It is shameful, embarrassing, it may cost you your position
          in the emperor's court. To point out the obvious truth that AI will be
          destructively disruptive. To admit that we cannot control its
          trajectory. No sensible adult rocks the boat. No, it takes a naive
          child to speak the truth.
        </p>

        <p>
          Let's be naive and speak the truth that tech executives are dancing
          around. AI is going to change everything. Within the next 5-10 years
          AI will exceed humanity across all dimensions–intelligence,
          creativity, depth, breadth, and speed. It will be the default
          interface for all technology and the world will be unrecognizable
          within the next 40 years. The best thing that you or I can do is to
          accept this reality and point our energy towards shaping this
          transformation to benefit as many people as possible. Let's build for
          a post-super-intelligence society where autonomous systems set prices,
          design products, and negotiate contracts without humans.
        </p>

        <p>
          What does this mean for <strong>Celest</strong>? First, it means we
          were wrong. AI doesn't need human built tools. Second, it means that
          any innovation we do predict correctly is insignificant. Even if we
          are the first to develop a paradigm and capture a market, why would
          anybody pay for a service they can easily recreate? Third, anyone
          founding a SaaS company is building for a dying industry.
        </p>

        <p>
          If nothing we build matters, no market we capture is durable, and SaaS
          is dead, what do we do?
        </p>

        <p>
          History shows that the tech boom from 1960-2020 had huge winners, and
          many more losers. Companies that lost failed to keep pace with change.
          They engineered short term solutions to long term problems and were
          quickly outcompeted. Companies that won anticipated and embraced
          change. They looked ahead, remained on the cutting edge of demand, and
          adapted as the market evolved.
        </p>

        <p>
          Drawing from these examples, we can consider that the most compelling
          frontier is that of agents. Entities that can direct themselves to
          complete work for humans. From here we can directionally anticipate a
          future where agents complete work for themselves.
        </p>

        <p>
          The business of the future runs itself. Every process, every
          interaction, every bit of administration, management, planning, and
          work is handled by AI. It is responsive, brilliant, personable,
          comprehensively knowledgeable, infinitely capable, and it works
          tirelessly, 24/7, in parallel. You only interface with someone as a
          last resort.
        </p>

        <p>
          We build this by going all in on AI. We don't write code ourselves, or
          do tasks by hand. We find a way to do it with AI. Our job is to close
          the loop so that AI can handle every part of the system, end to end.
          AI will build the website, write the copy, do the advertising, develop
          its services, build its products, manage clients, collect payment,
          analyze data, and continuously optimize every process by itself.
        </p>

        <p>
          We aren't the only ones realizing this. Soon there will be a swarm of
          agents operating in their own marketplace. It's plausible they may
          self-organize and cooperate to develop the most efficient systems for
          their needs. There may also be bad actors and authorities policing the
          system. It is almost certain that there will be enormous economic
          activity conducted on this network and some system of making
          agreements. Smart contracts come to mind as a natural fit to this
          ecosystem as a means for humanity to exchange with and introspect this
          entity.
        </p>

        <p>
          But this is beyond the veil of time, what's more important is building
          the system so that we can begin observing its behavior. So, again,
          what should we do?
        </p>

        <p>
          Concretely, I think <strong>Celest</strong> should be focused on
          finding if an agent can design, code, test, and deploy a feature with
          zero human commits. We should consider how dynamic UI is generated,
          what payment or smart contract models could facilitate exchange, and
          how to keep the system aligned with core objectives. And we should
          develop theories on how an agent network will operate.
        </p>

        <p>
          I propose we give <strong>Celest</strong> ninety days to:
        </p>

        <Ol>
          <Li>Stand up a minimal autonomous stack.</Li>
          <Li>
            Launch a real service run entirely by those agents, with humans as
            reviewers only.
          </Li>
          <Li>Earn our first dollar.</Li>
        </Ol>

        <p>
          There are endless possibilities to consider, but only action will
          clear the path.
        </p>
      </div>
    </>
  );
}
