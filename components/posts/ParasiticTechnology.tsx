import InlineLink from "@/components/ui/InlineLink";
import BlockQuote from "@/components/ui/BlockQuote";
import {
  FootnotesProvider,
  FootnoteLink,
  Footnotes,
} from "@/components/ui/Footnotes";

const footnotes = [
  {
    id: 1,
    content: (
      <>
        "Computers" once performed menial calculations for astronomers and
        mathematicians. As the profession expanded in the 1870s, it became a
        common job for women—brilliant, hard-working, underpaid, and
        unrecognized individuals who made significant contributions to
        astronomy, mathematics, and programming.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        Mao's Cultural Revolution is one of the bloodiest events in history, yet
        surprisingly few know the details. While America experienced its "Summer
        of Love," 1–2 million Chinese citizens were executed in the name of
        political reform, and another 30–60 million starved in the resulting
        famine.
      </>
    ),
  },
];

export default function ParasiticTechnology() {
  return (
    <FootnotesProvider footnotes={footnotes}>
      <div className="space-y-4">
        <p>
          Knowledge grows exponentially while understanding grows linearly. This
          gap is approaching a critical point across many dimensions of the
          modern world.
        </p>

        <p>
          Technology is the most apparent manifestation of this gap. There
          likely isn't a single person alive who could make a pencil on their
          own: to build the tools, harvest the wood, carve the shape, make the
          glue, mine the graphite, mix the paint, tap the rubber, and bind it
          all with a thin strip of iridescent metal. If it is likely that nobody
          could make a pencil, then it is certain that nobody could construct a
          computer. The many layers of infrastructure, architecture, algorithms,
          and software that are the collective result of thousands of years of
          human progress cannot possibly be contained by one person.
        </p>

        <p>
          It is a miracle that anything works at all. Our world is a testament
          to the cooperative power of humanity. Make no mistake—this is a
          miracle paid for with blood. It is dizzying to consider the loss of
          life and progress that accompanied the rise and fall of great
          civilizations, let alone the personal sacrifices made by history's
          greatest thinkers. That sacrifice built the modern world: medicine,
          education, electricity, and the web of knowledge we now depend on. But
          dark ages have shown us that progress is not a guarantee.
        </p>

        <p>
          Isaac Asimov's <em>Foundation</em> paints the tragedy of a society
          blessed with space-age technology but without the stability to sustain
          the knowledge of how to maintain it—completely reliant on, and
          vulnerable to, a handful of knowledge keepers.
        </p>

        <p>
          This delicate power dynamic is already playing out. The vector of free
          speech is controlled by a handful of entrepreneurs—drifting like bags
          in the wind of power.{" "}
          <InlineLink href="https://www.usitc.gov/publications/332/working_papers/us_exposure_to_the_taiwanese_semiconductor_industry_11-21-2023_508.pdf">
            Taiwan's 90% control of the advanced semiconductor industry
          </InlineLink>{" "}
          is a perilous vulnerability. And the unspoken cold war between the USA
          and China continues to escalate as we sprint forward in the race for
          AI. Perhaps our greatest imperative is to form systems that protect
          against these vulnerabilities for generations to come.
        </p>

        <BlockQuote author="Vladimir Putin">
          <p>Whoever controls AI controls the world.</p>
        </BlockQuote>

        <p>
          One concerning signal is the{" "}
          <InlineLink href="https://x.com/patrickc/status/1900594918923681829">
            drop in literacy and numeracy across the Western world
          </InlineLink>
          . It is easy to interpret this as our phones destroying our attention
          spans. It is more unsettling to consider that we are crossing a
          threshold of complexity—where fewer people have the capacity to
          operate advanced technology <em>and</em> memorize facts
          simultaneously.
        </p>

        <p>
          To a degree, this is the traditional trade-off of progress. Great
          orators lamented as Plato recorded Socrates' knowledge, ruining future
          generations' faculty of memory. Aristocrats warned that the printing
          press would confuse the mind. Teachers ridiculed children for the idea
          of carrying around a calculator—even after the belittling job title of
          "Computer"
          <FootnoteLink id={1} /> had been replaced by technology of the same
          name. Every generation will have its Luddites as knowledge morphs to
          meet society's demands.
        </p>

        <p>
          But as the gap between knowledge and understanding continues to grow,
          the price of this trade-off becomes more pronounced. Though he was an
          irredeemable, murderous terrorist,{" "}
          <InlineLink href="https://www.washingtonpost.com/wp-srv/national/longterm/unabomber/manifesto.text.htm">
            Ted Kaczynski's manifesto
          </InlineLink>{" "}
          makes a compelling argument: that technology narrows the range of
          acceptable behavior into a fragile monoculture of insidious control.
          This does not justify his actions, but it does highlight a dilemma. We
          are deeply entangled with parasitic technology.
        </p>

        <p>
          However, it is a symbiotic relationship—one where the host is
          benefited more than it is harmed.
        </p>

        <p>
          Yuval Noah Harari brilliantly argues that we are already cyborgs. When
          was the last time you went a day without your phone? Who among us
          could live without the superpower of near-infinite knowledge at our
          fingertips? It is no surprise that many prioritize the cell phone as a
          basic necessity—from homeless Americans to{" "}
          <InlineLink href="https://kk.org/thetechnium/the-post-produc/">
            rural Chinese who have chosen connectivity over running water
          </InlineLink>
          . The ability to connect with any person, anywhere, in real time is
          indistinguishable from magic. It is a power that ancient kings would
          have warred for. It is a force that elevates the otherwise
          undiscovered geniuses of our world.
        </p>

        <BlockQuote author="Stephen Jay Gould">
          <p>
            I am, somehow, less interested in the weight and convolutions of
            Einstein's brain than in the near certainty that people of equal
            talent have lived and died in cotton fields and sweatshops.
          </p>
        </BlockQuote>

        <p>
          Progress is the only way forward. We must find our geniuses and
          embrace the radical societal change in front of us with our full
          creative potential. It is the only way to ensure the future prosperity
          of humanity.
        </p>
        <p>
          Entertaining the anti-rational meme of degrowth is dangerous. It
          glorifies primitivism and encourages a slow spiral into irrelevance
          and totalitarianism. The EU's growth has stagnated. Venezuela's
          socialist experiment descended into chaos. The echoes of China's
          Cultural Revolution
          <FootnoteLink id={2} /> still reverberate through its iron fist.
          Instead, we must strengthen the fundamental values of the Western
          world in order to maintain our technological supremacy.
        </p>

        <p>
          Strength will be found in embracing AI. Onshoring semiconductor
          production. Alinging with free expression. Recruiting talent from
          every corner of the world. Modernizing education to provide every
          child with an AI tutor. Reforming regulation to prioritize innovation.
          Elevating entrepreneurship, leadership, oration, and first-principles
          reasoning.
        </p>

        <p>
          The torch of the Enlightenment has not yet been extinguished. Let us
          preserve its eternal flame—even if it is to be viewed through a
          computer screen.
        </p>

        <Footnotes />
      </div>
    </FootnotesProvider>
  );
}
