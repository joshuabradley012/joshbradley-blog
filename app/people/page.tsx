import type { Metadata } from "next";
import { H1 } from "@/components/Headings";
import { Ul, Li } from "@/components/List";
import InlineLink from "@/components/InlineLink";

export const metadata: Metadata = {
  title: "People",
  description: "The people who have influenced me through my life.",
};

export default function People() {
  return (
    <div className="space-y-4">
      <H1>People</H1>
      <p>
        This list is a collection of the thinkers, writers, and builders who
        have had the greatest influence on my life. Their ideas have been
        faithful companions.
      </p>
      <Ul>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Albert_Einstein">
            Albert Einstein
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://andymatuschak.org/">
            Andy Matuschak
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/andy_matuschak">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Ben_Horowitz">
            Ben Horowitz
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/bhorowitz">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/C._S._Lewis">
            C.S Lewis
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Carl_Jung">
            Carl Jung
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Carl_Sagan">
            Carl Sagan
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Charlie_Munger">
            Charlie Munger
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Christopher_Hitchens">
            Christopher Hitchens
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Cormac_McCarthy">
            Cormac McCarthy
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://www.daviddeutsch.org.uk/">
            David Deutsch
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/DavidDeutschOxf">twitter</InlineLink>
          )
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/David_Foster_Wallace">
            David Foster Wallace
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://davidgoggins.com/">
            David Goggins
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/davidgoggins">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://douglasmurray.net/">
            Douglas Murray
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/DouglasKMurray">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://eckharttolle.com/">
            Eckhart Tolle
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Eric_Weinstein">
            Eric Weinstein
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/EricRWeinstein">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Ernest_Hemingway">
            Ernest Hemingway
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Franz_Kafka">
            Franz Kafka
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Friedrich_Nietzsche">
            Friedrich Nietzsche
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/George_Orwell">
            George Orwell
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Helen_Keller">
            Helen Keller
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Jack_Kerouac">
            Jack Kerouac
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://janegoodall.org/">Jane Goodall</InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/John_Steinbeck">
            John Steinbeck
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/John_von_Neumann">
            John von Neumann
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://www.jordanbpeterson.com/">
            Jordan Peterson
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/jordanbpeterson">twitter</InlineLink>
          )
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Julian_Assange">
            Julian Assange
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://kk.org/thetechnium/">
            Kevin Kelly
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/kevin2kelly">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://pmarca.substack.com/">
            Marc Andreesen
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/pmarca">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)">
            Margaret Hamilton
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://www.fooledbyrandomness.com/">
            Nassim Nicholas Taleb
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/nntaleb">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://nav.al/">Naval Ravikant</InlineLink> (
          <InlineLink href="https://x.com/naval">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://www.nealstephenson.com/">
            Neal Stephenson
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/nealstephenson">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://unenumerated.blogspot.com/">
            Nick Szabo
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/nickszabo4">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://patrickcollison.com/about">
            Patrick Collison
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/patrickc">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://www.paulgraham.com/articles.html">
            Paul Graham
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/paulg">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Paulo_Coelho">
            Paulo Coelho
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Peter_Thiel">
            Peter Thiel
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/peterthiel">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://www.principles.com/">Ray Dalio</InlineLink>{" "}
          (<InlineLink href="https://x.com/RayDalio">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Richard_Feynman">
            Richard Feynman
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://www.tetragrammaton.com/">
            Rick Rubin
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/rickrubin">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://powerseductionandwar.com/">
            Robert Greene
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/RobertGreene">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://ryanholiday.net/">Ryan Holiday</InlineLink>{" "}
          (<InlineLink href="https://x.com/RyanHoliday">twitter</InlineLink>)
        </Li>
        <Li>
          <InlineLink href="https://www.samharris.org/">Sam Harris</InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Stephen_Hawking">
            Stephen Hawking
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://en.wikipedia.org/wiki/Steve_Jobs">
            Steve Jobs
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://vitalik.eth.limo/">
            Vitalik Buterin
          </InlineLink>{" "}
          (<InlineLink href="https://x.com/vitalikbuterin">twitter</InlineLink>)
        </Li>
      </Ul>
    </div>
  );
}
