import InlineLink from "@/components/InlineLink";
import { H1 } from "@/components/Headings";

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <H1>Josh Bradley</H1>

        <p>
          I seek to understand the systems that structure our reality and I
          write to explore how those systems will shape the future. My
          aspiration is to guide humanity towards a world where work is optional
          and abundance is universal.
        </p>

        <p>
          I'm a self-taught engineer, UC Davis dropout, ex-Procore IPO employee,
          and I founded{" "}
          <InlineLink href="https://bradleydigital.agency/">
            Bradley Digital
          </InlineLink>{" "}
          to help startups grow. Now, I'm building AI for wholesale at{" "}
          <InlineLink href="https://www.coreranger.com/">
            Core Ranger
          </InlineLink>
          .
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
