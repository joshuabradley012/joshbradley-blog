import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { H2 } from "@/components/Headings";
import { Ul, Li } from "@/components/List";
import InlineLink from "@/components/InlineLink";

const post = getPostBySlug("reframing-ambition");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function ReframingAmbition() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          Being an intelligent, ambitious, rebellious, and socially inept
          twenty-something is an exciting and confusing time. The world is
          simultaneously filled with unbearable ignorance and astounding success
          stories. You strike out on your own, begin your career, and feel your
          world-view colliding with reality.
        </p>

        <p>
          Many of us became accustomed to a predictable life path. Work hard, be
          smart, and success will come to you. Good grades lead to good jobs,
          good jobs lead to good opportunities, good opportunities lead to
          untold happiness and success. But at some point, that path collapses.
        </p>

        <p>
          Maybe it's during college when you start questioning why you're
          wasting your time taking irrelevant classes. Maybe it's in your career
          when you feel that you are smarter and more dedicated than your
          managers, and yet can't advance your career like they can. Maybe it's
          after the <strong>n</strong>th time implementing some new technology
          that you hoped would solve all of your problems, only to find that it
          too is lacking.
        </p>

        <p>
          You begin to see that if you do what everyone else is doing, you'll
          end up just like them. Uninterested, uninspired, and unhappy.
        </p>

        <p>
          You drop out. You quit. You start building. And you find a new path.
          The dream of being a founder. You read Paul Graham's essays and
          convince yourself that this is it. This is what you've been missing
          all along. This is what you are built for.
        </p>

        <p>
          At least, that's the path I took. 60 hour work weeks from ages 20-27.
          Numbing myself with work, video games, and marijuana. No social life
          to speak of. Just grinding it out with unrealistic expectations of
          oversized rewards.
        </p>

        <p>
          I became obsessed with a superficial vision of what it took to build a
          billion dollar startup. I poured myself into crafting the perfect
          pitch deck. I researched hundreds of companies, created a compelling
          TAM analysis, crafted the perfect mission statement, mapped out our
          funding roadmap, built org charts, and highlighted why me and my
          co-founder were the ideal team. I led myself to believe I had what it
          took to get funded. And was completely ignored. More than that:
        </p>

        <Ul>
          <Li>I burned out</Li>
          <Li>
            I was hard on myself
            <Ul>
              <Li>For not being smarter</Li>
              <Li>For not working harder</Li>
              <Li>For not having enough resources</Li>
            </Ul>
          </Li>
          <Li>I embarrassed myself by presenting underdeveloped ideas</Li>
          <Li>I lost sleep worrying about the wrong things</Li>
          <Li>I lost money paying for services I didn't need</Li>
          <Li>I developed the product with a frantic energy</Li>
          <Li>I misguided my co-founder</Li>
          <Li>I achieved little real progress</Li>
        </Ul>

        <H2>What went wrong?</H2>

        <p>
          At the end of the day, I have no one to blame but myself. I was caught
          in the trap of comparing myself to others. Seeing young founders
          gaining funding led to me copying what they were doing on the surface,
          without looking deeper into what investors really look for.
        </p>

        <p>
          What nobody tells you is this. Your vision, your background, your
          brand, and your pitch deck are nothing. You need users, connections,
          and the guarantee of revenue.
        </p>

        <p>
          The reality of building a 0.001% company is that you need to be a
          0.001% founder. Seems obvious but it's hard to accept as an ambitious
          person. Realize, it's not just intelligence and discipline. It's
          resources, connections, charisma, resilience, and luck. That takes
          time to build and is never guaranteed.
        </p>

        <p>
          Which is why building a billion dollar company in your 20s is the
          intersection of many profoundly rare events. Supportive, wealthy
          parents. Being born intelligent. Growing up in the right area. Going
          to the right school. Having the right early career experiences. Having
          the right idea at the right time. And so much more that goes into
          creating the Bill Gates, Mark Zuckerbergs, and Steve Jobs of the
          world.
        </p>

        <p>The average founder is 42. It takes time.</p>

        <p>
          Brilliant people and brilliant ideas have come from startups.{" "}
          <InlineLink href="https://paulgraham.com/articles.html">
            Paul Graham's essays
          </InlineLink>{" "}
          stand out among them. So does Peter Thiel's <em>Zero to One</em>. And
          Ben Horowitz's <em>The Hard Thing about Hard Things</em>. Certainly
          there are good investors and VC firms out there. And certainly there
          are exceptional founders who have overcome incredible challenges.
        </p>

        <p>
          And certainly, there are misleading firms and investors. Startups are
          driven by{" "}
          <InlineLink href="https://www.gartner.com/en/articles/what-s-new-in-the-2023-gartner-hype-cycle-for-emerging-technologies">
            hype cycles
          </InlineLink>{" "}
          and power laws. Everyone is on the hunt for the next 100x product, and
          often this leads to optimizing for the wrong signals. Being a hype man
          and marketing genius often gets over selected for, setting the wrong
          example.
        </p>

        <p>
          This is a real problem. This has degraded our trust in tech. XR, the
          metaverse, crypto, coworking, and video games have all delivered
          overhyped, disappointing products and businesses. This is how you get
          the Elizabeth Holmes, Sam Bankman-Frieds, and Adam Neumanns of the
          world.
        </p>

        <H2>How startup culture has degraded</H2>

        <p>
          Tech is getting old. Google is 26 years old. Apple is 48! The field
          has become saturated. It's much harder for a college kid to disrupt
          the world with a good idea. Not impossible, but magnitudes more
          difficult. It's harder to raise money, earn attention, and sell your
          product. People have lost their glossy eyed view of technology,
          capital isn't free anymore, and the days of{" "}
          <InlineLink href="https://andrewchen.com/the-law-of-shitty-clickthroughs/">
            78% click throughs
          </InlineLink>{" "}
          are far behind us.
        </p>

        <p>
          And yet there is money to be made! The VC model is predicated on early
          investments in precocious companies. The wheels must keep turning. Old
          ideas are rehashed, emerging technologies are oversold, and new hype
          cycles are created. Disruption has shifted towards creating attention
          rather than creating technology. If you can cut through the noise,
          you're a winner! At the cost of your consumers.{" "}
          <InlineLink href="https://phrack.org/issues/71/17.html#article">
            cts
          </InlineLink>{" "}
          describes this brilliantly.
        </p>

        <H2>Does startup culture ever work?</H2>

        <p>
          Yes, of course. Great products are produced through startups. We use
          them every day, you're likely using several right now.
        </p>

        <p>
          The distinction is summed up well in <em>Zero to One</em>. Truly
          disruptive technology is not an incremental improvement, but something
          brand new. It's not a 2x step forward but a 10x leap into the future.
          At the perfect time. With the perfect team.
        </p>

        <p>
          Building a product of this nature requires a very specific skill set,
          far beyond brilliance and vision. And it starts with you. Take your
          time. Improve your skills. Grow yourself every day. And build at your
          pace.
        </p>

        <p>
          Now I concern myself with building a great product and great business
          that will earn my income. Engineering is a craft. Like any craft,
          mastery can only be achieved through discipline and practice. I focus
          on showing up every day.
        </p>

        <p>
          Approaching life this way has sharpened my skills, given me
          experience, increased my knowledge, and contributed to a codebase that
          can serve as the foundation for future products.
        </p>

        <p>I am crafting my masterpiece. And transforming my personal life.</p>

        <p>
          I'm healthy, I'm happy, and I'm balanced. I have great friends, I'm
          dating, I'm a part of my community, and I have strong relationships
          with my family. I travel, hike, read, write, and code. I feel
          incredibly grateful to be who I am and where I am in life. For someone
          who used to see themselves as an outcast, this is a huge personal
          achievement. It is a snowball that keeps growing.
        </p>

        <p>
          Most businesses take 5-10 years to mature. Most people take 25 years.
          The best businesses and people never stop. Look at{" "}
          <InlineLink href="https://en.wikipedia.org/wiki/Warren_Buffett">
            Warren Buffett
          </InlineLink>
          .
        </p>

        <p>My journey has just begun.</p>

        <H2>The goal is greatness</H2>

        <p>
          The further I continue down this path, the more I redefine success. My
          true goal is to live a good life and{" "}
          <InlineLink href="https://paulgraham.com/greatwork.html">
            do great work
          </InlineLink>
          . Personal wealth has become a smaller part of the puzzle.
        </p>

        <p>
          Success is your health, your friends, your family, your work, your
          character, your capability, your spirituality, your freedom. It's the
          ability to wake up and live your ideal day, every day. It's to have
          the love, peace, and resilience to gracefully navigate the suffering
          and joy of life. It's to meaningfully improve the world for the next
          generation.
        </p>

        <p>
          History is full of great people. Follow in their footsteps. Their
          wisdom extends back thousands of years, far deeper and truer than
          anything we have found in the last 40 years of startup culture.
        </p>

        <p>
          Through this I am finding a path that is much more authentic, and
          complete, for me. Personal growth, balance, doing good work for good
          people, and the possibility of raising a family are far more valuable
          to me than building a billion dollar company.
        </p>

        <H2>The landscape is always shifting</H2>

        <p>
          Today's world has very different needs from when Google or Apple were
          founded. The most obvious opportunities have been swallowed up. And
          yet, it's never been easier to be a developer. My productivity, with
          the libraries and tools I have access to, is far beyond what someone
          could have achieved in the 90s. What I can do alone may have taken a
          team of 100 in the past.
        </p>

        <p>
          There has never been a better time to be a small business. And now
          they might be busting these massive monopolies. At least{" "}
          <InlineLink href="https://reuters.com/legal/us-judge-rules-google-broke-antitrust-law-search-case-2024-08-05/">
            Google certainly will be broken up
          </InlineLink>
          . Use this to your advantage.
        </p>

        <p>
          Get close to the edge of a problem, gain a deep understanding of a
          specific field and develop useful skills in it. Help people solve
          difficult problems and learn to work well with anyone. Don't get your
          ideas from other people. Listen deeply, but think for yourself. Learn
          about the world, learn how it works, where it struggles, and how
          people find success, in every way.
        </p>

        <p>Find the path you want to take, and take it.</p>
      </div>
    </>
  );
}
