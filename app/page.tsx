import LoadWrapper from "@/components/LoadWrapper";
import InlineLink from "@/components/ui/InlineLink";
import { H1 } from "@/components/ui/Headings";

export default function Home() {
  return (
    <LoadWrapper>
      <H1>Josh Bradley</H1>
      <div className="space-y-4">
        <p>
          I seek the wisdom needed to live a great life. I write about
          philosophy, technology, spirituality, business, and politics.
        </p>
        <p>
          Currently I am building{" "}
          <InlineLink href="https://celest.tech">Celest</InlineLink>, a
          marketing tool for AI. I hope to dedicate my time towards gaining and
          sharing knowledge to create value for others.
        </p>
        <p>
          I'm a self-taught engineer, UC Davis dropout, ex-Procore IPO employee,
          and the founder of{" "}
          <InlineLink href="https://bradleydigital.agency">
            Bradley Digital
          </InlineLink>
          . I grew up in Bakersfield and currently reside in LA.
        </p>
      </div>
      <hr className="my-8 border-neutral-200" />
      <div className="flex flex-wrap gap-4 text-xs">
        <InlineLink href="mailto:hello@joshbradley.me">Email</InlineLink>
        <InlineLink href="https://x.com/josh_b_rad">Twitter</InlineLink>
        <InlineLink href="https://github.com/joshuabradley012">
          GitHub
        </InlineLink>
        <InlineLink href="https://www.linkedin.com/in/joshuabradley012/">
          LinkedIn
        </InlineLink>
        <InlineLink href="https://www.instagram.com/josh_b_rad/">
          Instagram
        </InlineLink>
      </div>
    </LoadWrapper>
  );
}
