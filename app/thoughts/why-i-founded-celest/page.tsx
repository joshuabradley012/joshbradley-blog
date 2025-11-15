import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { H2 } from "@/components/Headings";
import { Ul, Ol, Li } from "@/components/List";
import InlineLink from "@/components/InlineLink";

const post = getPostBySlug("why-i-founded-celest");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function WhyIFoundedCelest() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          There are very few products in Martech that people <em>love</em>{" "}
          using. There is a solution for everything. But when was the last time
          you heard someone say they <em>love</em> using Salesforce? Or Marketo?
          Or WordPress? The general experience is clunky, disconnected, and
          expensive. The more you push these products to create delightful
          experiences, the more rough edges you run into.
        </p>

        <p>
          It appears that the market is quickly adapting to this pressure.
          Martech is outpacing the relative growth of the digital economy by 2x,
          growing at 20% per year. Already, there are 11,000 solutions in the
          space, with no signs of slowing down. But where is the Spotify of
          Martech? I've been working as a developer in marketing for the last
          decade, and I don't have a single go-to product that delights me. I'm
          always looking for something new.
        </p>

        <p>
          My tin-foil-hat explanation of the problem is that most technologists
          have no interest in sales and marketing. I'm reminded of{" "}
          <em>The Hitchhiker's Guide to the Galaxy</em> where the leaders, the
          artists, and the salespeople are divided up and board their own ships.
          The salespeople take-off first, and are thrilled to be the first to
          avoid catastrophe. But they had been tricked. The leaders and the
          artists had conspired to send them back to Earth, to their certain
          doom. The world's best engineers haven't focused their efforts on
          building products they disdain. Marc Benioff, though brilliant, is no
          engineer. Martech doesn't have a Zuckerberg.
        </p>

        <p>
          Or, perhaps, the market conditions haven't been right. Layers upon
          layers of foundational tech had to be built first. It's easy to take
          for granted what exists today. Radix, Vercel, React, Postgres, even
          email, web browsers, and the internet itself. Every layer has
          significantly enhanced developers productivity, and has continued to
          improve over time. And now, generative AI has entered the scene.
        </p>

        <p>
          We all know AI will change the world, but most of us are still
          uncertain of exactly how. The surface level integrations are easy.
          Write copy, generate images, be a chatbot. But how far down the stack
          will AI reach? Exploring that question is at the heart of everything
          we do.
        </p>

        <p>
          What's fun is by exploring how AI can help us build our own product,
          everything we build will help others build. It's a self-serving
          feedback loop. Everything we build to grow Celest will in turn help
          others grow too.
        </p>

        <p>
          We hope to enable individuals to create digital masterpieces that
          would have otherwise taken millions in R&D and hundreds of employees
          to build. In doing so, we want to return to an internet that is
          personal, truthful, and creative. To get back to the roots of what the
          internet was supposed to be. A tool to transform humanity, for good.
        </p>

        <H2>The plan</H2>

        <p>
          At Celest's core is a flexible, intuitive, and powerful UI for
          creating and managing schemas that is deeply integrated with AI, which
          will also be able to create and manage schemas. Our roadmap is to
          build on top of this architecture in order to create a strong
          foundation for all future products. These are the core features we are
          building.
        </p>

        <Ul>
          <Li>CMS</Li>
          <Li>Web forms</Li>
          <Li>Web components</Li>
        </Ul>

        <p>
          A core lesson we have learned from using technology like React,
          Vercel, and Contentful is that the best products are composable,
          headless, and open, but opinionated. Celest will be a full-stack
          product that we believe works best when used within the Celest
          ecosystem. Particularly because of the deep integrations they will
          share.
        </p>

        <p>
          But our opinion is not a limitation. Every product will be designed to
          be modular and composable, so users can pick and choose exactly what
          services they need, and combine it seamlessly with their preferred
          technology.
        </p>

        <p>
          Once this foundation is established and battle tested, we plan to
          continue expanding into all of the needs for world-class websites.
        </p>

        <Ul>
          <Li>CRM</Li>
          <Li>Web analytics</Li>
          <Li>Personalization</Li>
          <Li>Payments</Li>
          <Li>Commerce</Li>
          <Li>Visual site builder</Li>
          <Li>Plugins</Li>
        </Ul>

        <p>
          Clearly, this is an ambitious project. It will take many years and
          many contributors to reach our goal. Realistically, we will pivot and
          change our roadmap many times. But for now it is the direction we are
          moving in.
        </p>

        <H2>Why is this different?</H2>

        <p>
          WordPress, Hubspot, Salesforce, Shopify, Webflow, Contentful,
          ContentStack, and Optimizely, all have a similar product offering.
        </p>

        <p>So, what will make Celest unique?</p>

        <p>
          We believe that the late mover advantage we have gained by learning
          everything we hate and love from existing products will allow us to
          craft a lasting CMS for the future. A product that anyone can use to
          create anything.
        </p>

        <p>
          Over the last ten years I've seen the technology stack behind
          companies of all sizes, from mom and pop websites to multibillion
          dollar enterprise architectures. They all share similar limitations.
        </p>

        <Ul>
          <Li>Complex and buggy UI</Li>
          <Li>Disconnected data sets</Li>
          <Li>Low quality plugins</Li>
          <Li>Restrictive visual site builders</Li>
          <Li>
            Restrictive web components dependent on JS injection or iFrames
          </Li>
          <Li>Superficial AI integrations only focused on content creation</Li>
          <Li>Complex and incomplete APIs</Li>
          <Li>Limited and inflexible analytics</Li>
          <Li>Limited and complex personalization</Li>
          <Li>Heavy, slow forms with limited UI</Li>
          <Li>Poor DX</Li>
          <Li>Little to no support for payments</Li>
          <Li>Inflexible ecommerce solutions</Li>
        </Ul>

        <p>
          This creates unintuitive, complex experiences. Existing solutions
          address the needs of non-technical consumers by abstracting away
          complexity. But abstracting away complexity creates limitations, and
          when users get stuck, they ask developers to help. Unfortunately for
          developers, these abstractions limit their ability to create
          root-cause solutions.
        </p>

        <p>
          How many times have you had to explain why something doesn't or can't?
          How many times has an executive signed a 6 figure contract for a SaaS
          product that doesn't deliver on its promise? How many times have you
          strung together a brittle solution that breaks 6 months later?
        </p>

        <p>
          All of this holds back production, leads to bugs, complexity, and
          organizational frustration. It's a bad experience.
        </p>

        <p>
          Celest aims to be different by creating great experiences for all
          users. Creators, editors, developers, analysts, marketers, sales, and
          entrepreneurs. But in order to achieve this, we must start with
          engineers. The more we enable them to express creativity, the more we
          can ensure our future products will too.
        </p>

        <p>
          Our goal is to enable the entire marketing tech stack to share a
          single database and a single codebase. This simplicity will give us
          the power to create deep integrations across every product. Imagine a
          tool where your content, web analytics, codebase, and lead database
          all exist in one location, easy to mold and empower with AI.
        </p>

        <p>
          Our dream state product will enable users to ask "Celest, can you
          create an audience segment of our most engaged leads and personalize
          the homepage based on their site activity? Also, create a free trial
          experience for them including a full email and digital ad campaign,
          and reports to track the performance of this campaign."
        </p>

        <p>
          The possibilities of such a product would be endless. It's easy to
          envision how this could also help create simple SaaS products.
        </p>

        <H2>When will it be done?</H2>

        <p>
          I don't know. I've written{" "}
          <InlineLink href="/blog/10000-lines-of-code">
            10,000 lines of code
          </InlineLink>{" "}
          in and I'm not sure where the finish line is. That is the nature of
          building something new. It takes time and effort.
        </p>

        <p>
          But, at the least, I'm hoping to release a headless CMS for beta at
          the beginning of 2025.
        </p>

        <p>
          And the beauty of being a tiny company is you can take time. Between
          me and my co-founder, Celest costs ~$100 a month to run. The primary
          investment is effort.
        </p>

        <p>
          While juggling my client work, I've averaged ~50 lines of code per day
          for Celest. I could do more, feel like I should do more. Truthfully
          part of my motivation to write this blog post is to motivate myself to
          see the opportunity in front of me.
        </p>

        <H2>Is this worth the effort?</H2>

        <p>
          I just finished Peter Theil's incredible book, <em>Zero to One</em>. I
          don't feel that I have the qualifications to answer his seven criteria
          credibly, but it's worth going through the mental exercise.
        </p>

        <Ol className="space-y-4">
          <Li>
            <strong>The engineering question:</strong>{" "}
            <em>
              Can you create breakthrough technology instead of incremental
              improvements?
            </em>
            <p className="mt-2">
              I'm not sure that we're developing breakthrough technology as much
              as we are leveraging breakthrough technology. Was WordPress a
              breakthrough? Not really. Has it shaped the internet? Absolutely.
            </p>
          </Li>
          <Li>
            <strong>The timing question:</strong>{" "}
            <em>Is now the right time to start your particular business?</em>
            <p className="mt-2">
              Yes, absolutely. There is massive demand, and we are on the right
              side of the foundational technology we needed to create this
              product.
            </p>
          </Li>
          <Li>
            <strong>The monopoly question:</strong>{" "}
            <em>Are you starting with a big share of a small market?</em>
            <p className="mt-2">
              I've wrestled with this question a lot. My ideal market is people
              like me. Thoughtful engineers frustrated by the tech around them.
              If we start with helping engineers build their personal sites and
              small projects, then yes.
            </p>
          </Li>
          <Li>
            <strong>The people question:</strong>{" "}
            <em>Do you have the right team?</em>
            <p className="mt-2">
              Yes, but we're small. Just me and my cofounder. But we've each
              been working in martech for a decade. That's a good start.
            </p>
          </Li>
          <Li>
            <strong>The distribution question:</strong>{" "}
            <em>
              Do you have a way to not just create but deliver your product?
            </em>
            <p className="mt-2">
              Maybe. We will distribute our product using the very product we
              create. But, will we find a foothold in our desired niche? Maybe.
            </p>
          </Li>
          <Li>
            <strong>The durability question:</strong>{" "}
            <em>
              Will your market position be defensible 10 and 20 years into the
              future?
            </em>
            <p className="mt-2">
              WordPress has lasted 20 years, and still dominates the market.
              Websites seem to evolve fast but migrate slowly. So I think yes.
            </p>
          </Li>
          <Li>
            <strong>The secret question:</strong>{" "}
            <em>
              Have you identified a unique opportunity that others don't see?
            </em>
            <p className="mt-2">
              No. From many conversations I've had, I'm convinced that many
              people see the same opportunity we do. It comes down to execution
              over uniqueness.
            </p>
          </Li>
        </Ol>

        <p>
          So, have we "mastered fortune" and guaranteed our eternal success?
          Probably not. This certainly isn't the next Google to make VCs drool
          over. But is it worth building? Absolutely.
        </p>

        <p>
          This is the product I've always dreamed of. It's something I've been
          looking for my entire career, and got tired of searching for. We hit
          enough important criteria for this to be a product worth building. As
          our mentor has told us, we're skating towards the puck, might as well
          shoot for a goal. At the very least, it's made me faster, stronger,
          smarter, and all around a better person. That makes it all worth it.
        </p>
      </div>
    </>
  );
}
