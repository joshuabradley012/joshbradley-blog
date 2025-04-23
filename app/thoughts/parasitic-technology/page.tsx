import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import InlineLink from "@/components/InlineLink";
import BlockQuote from "@/components/BlockQuote";
import {
  FootnotesProvider,
  FootnoteLink,
  Footnotes,
} from "@/components/Footnotes";

const post = getPostBySlug("parasitic-technology");

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

export async function generateMetadata() {
  return createMetadata(post);
}

export default function ParasiticTechnology() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <FootnotesProvider footnotes={footnotes}>
        <div className="space-y-4">
          <p>
            Knowledge grows exponentially while understanding grows linearly.
            This gap is creating tension in many parts of society.
          </p>

          <p>
            Technology is particularly affected by this tension. There likely
            isn't a single person alive who could make a pencil: to build the
            tools, harvest the wood, carve the shape, formulate the glue, mine
            the graphite, mix the paint, tap the rubber, and bind it all with a
            thin strip of iridescent metal. If it's unlikely that anyone could
            make a pencil, then it is certain that nobody could construct a
            computer. Layers of infrastructure, architecture, algorithms, and
            software represent the collective result of thousands of years of
            human progress—knowledge that cannot possibly be contained by one
            person.
          </p>

          <p>
            It is a miracle that anything works. Our world is a testament to the
            cooperative power of humanity, held together by a living
            encyclopedia of knowledge. But this stability is not a guarantee.
            Despite our best efforts, dark ages have come. It is dizzying to
            consider the loss of life and progress caused by the rise and fall
            of great civilizations.
          </p>

          <p>
            Isaac Asimov's <em>Foundation</em> tells the tragedy of a society
            blessed with space-age technology but cursed with the lack of
            knowledge needed to run it—completely reliant on, and vulnerable to,
            a handful of knowledge keepers.
          </p>

          <p>
            This delicate power dynamic is already visible in our world. The
            vector of free speech is controlled by a handful of
            entrepreneurs—drifting like bags in the wind of power.{" "}
            <InlineLink href="https://www.usitc.gov/publications/332/working_papers/us_exposure_to_the_taiwanese_semiconductor_industry_11-21-2023_508.pdf">
              Taiwan controls 90% of the advanced semiconductor industry
            </InlineLink>
            , and it could be easily disrupted. USA and China continue to
            escalate a cold war over AI. Each holds a lever that could move the
            world.
          </p>

          <BlockQuote author="Vladimir Putin">
            <p>Whoever controls AI controls the world.</p>
          </BlockQuote>

          <p>
            Though he was an irredeemable, murderous terrorist,{" "}
            <InlineLink href="https://www.washingtonpost.com/wp-srv/national/longterm/unabomber/manifesto.text.htm">
              Ted Kaczynski's manifesto
            </InlineLink>{" "}
            makes a compelling argument: as technology becomes more complex,
            society becomes more monotonous. He argues that technology demands
            society to control human behavior in order to produce more
            technology. He saw it as an unnatural, parasitic force.
          </p>

          <p>
            But it is a symbiotic relationship—one where the host benefits more
            than it is harmed. And yet, the host is harmed.
          </p>

          <p>
            One concerning signal is the{" "}
            <InlineLink href="https://x.com/patrickc/status/1900594918923681829">
              drop in literacy and numeracy across the Western world
            </InlineLink>
            . It's easy to interpret as our phones are destroying our attention
            spans. But it's more unsettling to consider that technology may be
            displacing the societal need for education, as knowing <em>how</em>{" "}
            to operate technology becomes more important than knowing{" "}
            <em>why</em> it works.
          </p>

          <p>
            Perhaps this is the traditional trade-off of progress. Great orators
            lamented as Plato recorded Socrates' teachings, ruining future
            generations' faculty of memory. Aristocrats warned that the printing
            press would confuse the mind. Teachers ridiculed children for the
            idea of carrying around a calculator—even after the belittling job
            title of "Computer"
            <FootnoteLink id={1} /> had been replaced by the technology of the
            same name. Every generation will have its Luddites as society
            reshapes to meet knowledge's demands. Despite this, civilization
            progresses.
          </p>

          <p>
            Yuval Noah Harari brilliantly argues that we are already cyborgs.
            When was the last time you went a day without your phone? Who among
            us could live without the superpower of near-infinite knowledge at
            our fingertips? It's no surprise that many prioritize the cell phone
            as a basic necessity—from homeless Americans to{" "}
            <InlineLink href="https://kk.org/thetechnium/the-post-produc/">
              rural Chinese who have chosen connectivity over running water
            </InlineLink>
            . The ability to connect with any person, anywhere, in real time is
            indistinguishable from magic. It's a power that ancient kings would
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
            direct their creative potential toward the societal change ahead. It
            is the only way to ensure the prosperity of future generations.
          </p>

          <p>
            Entertaining the anti-rational meme of degrowth is dangerous. It
            encourages a slow spiral into irrelevance and totalitarianism. The
            EU's growth has stagnated. Venezuela's socialist experiment
            descended into chaos. The echoes of China's Cultural Revolution
            <FootnoteLink id={2} /> still reverberate through its iron fist.
            Instead, we must strengthen the fundamental values of the Western
            world to maintain our technological supremacy.
          </p>

          <p>
            Strength will be found in embracing AI. Onshoring semiconductor
            production. Aligning with free expression. Recruiting talent from
            every corner of the world. Modernizing education to leverage AI.
            Reforming regulation to prioritize innovation. And encouraging
            entrepreneurship, leadership, oration, and first-principles
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
    </>
  );
}
