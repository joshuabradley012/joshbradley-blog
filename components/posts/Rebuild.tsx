import BlockQuote from "@/components/ui/BlockQuote";
import InlineLink from "@/components/ui/InlineLink";

export default function Rebuild() {
  return (
    <div className="space-y-4">
      <p>
        This version of my website is a departure from my{" "}
        <InlineLink href="/thoughts/building-this-website">
          old philosophy.
        </InlineLink>{" "}
        I have shifted from performance to experience.{" "}
        <InlineLink href="https://shud.in/">Shu Ding's website</InlineLink>{" "}
        heavily inspired this redesign—I borrowed many details, including
        layout, font choices, and transition animations. I find it elegant and
        timeless.
      </p>
      <p>
        I chose to build this using Next.js, without MDX or any other content
        layer. Each post is written in React, allowing me to embed any component
        anywhere—creating an interactive medium through which I can express my
        ideas.
      </p>
      <p>
        That is the purpose of a blog, isn't it? To express ideas. To formalize
        the thoughts that{" "}
        <InlineLink href="https://jsomers.net/careenium.pdf">careen</InlineLink>{" "}
        about my mind into something people can read—and perhaps be inspired by.
        My last website, built in Ghost, felt stifling. Adding custom pages was
        impossible. Interactivity was a challenge. I considered Substack, but it
        was limited too. Custom React feels right. Handcrafted. Simple.
        Expressive. A blank canvas for my thoughts.
      </p>
      <p>
        This is my digital garden—a place to curate content that fulfills me.
        Already, I've enjoyed sifting through my notes, searching for gems to
        cut and polish. My mind wanders to what it might become.
      </p>
      <p>
        Grand ideas of being a "blogger" come to mind. I could be like Scott
        Alexander or Tyler Cowen—a thought leader inspiring the greatest minds
        of our generation. But there is fear. Fear of being judged. Fear of
        failing. Fear of doing something new.
      </p>
      <p>
        At worst, that fear consumes me—leaving me stranded between my old life
        and my new self. At best, I alchemize it into motivation. Faced with the
        choice between the pain of conformity and the pain of individuation, I
        choose the latter.
      </p>
      <BlockQuote author="William Faulkner">
        <p>
          You cannot swim for new horizons until you have courage to lose sight
          of the shore.
        </p>
      </BlockQuote>
      <p>
        I don't know what lies on the other side of this experience. But I'm
        excited to find out. If you're here, I hope you'll stick around. There's
        more to come—whatever it ends up becoming.
      </p>
    </div>
  );
}
