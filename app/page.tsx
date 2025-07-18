import InlineLink from "@/components/InlineLink";
import { H1 } from "@/components/Headings";

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <H1>Josh Bradley</H1>

        <p>
          I seek the wisdom needed to live a great life. I think about how the
          world works and where the future is headed. I write about philosophy,
          technology, business, and politics.
        </p>

        <p>
          Right now, I'm building{" "}
          <InlineLink href="https://celest.tech">Celest</InlineLink>, a platform
          for building software with multi-agent systems. My goal is to advance
          us towards a future with ethical, autonomous businesses.
        </p>

        <p>
          I'm a self-taught engineer, UC Davis dropout, and ex-Procore IPO
          employee. I founded{" "}
          <InlineLink href="https://bradleydigital.agency">
            Bradley Digital
          </InlineLink>{" "}
          to help startups grow. I grew up in Bakersfield and currently reside
          in LA.
        </p>
      </div>
      <hr />
      <div className="flex flex-wrap gap-4 text-xs">
        <InlineLink href="https://x.com/joshtbradley">Twitter</InlineLink>
        <InlineLink href="https://github.com/joshuabradley012">
          GitHub
        </InlineLink>
        <InlineLink href="https://www.linkedin.com/in/joshuabradley012/">
          LinkedIn
        </InlineLink>
        <InlineLink href="/api/rss">RSS</InlineLink>
      </div>
    </>
  );
}
