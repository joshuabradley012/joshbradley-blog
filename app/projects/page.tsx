import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { H1 } from "@/components/ui/Headings";
import InlineLink from "@/components/ui/InlineLink";
import { Ul, Li } from "@/components/ui/List";
import {
  Assignar,
  Celest,
  Jobsite,
  Jordyhelps,
  Kojo,
  Procore,
  Silo,
} from "@/icons";
import cd5 from "@/public/images/cd5.png";
import pacifica from "@/public/images/pacifica.png";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The projects I've had the pleasure of working on over the years.",
};

export default function Projects() {
  return (
    <div className="space-y-4">
      <H1>Projects</H1>
      <p>
        I've had the pleasure of working on some great projects. I owe so much
        of my personal and professional growth to the people I've worked with on
        these teams.
      </p>
      <div className="mt-12 flex">
        <Link href="https://celest.tech" target="_blank">
          <Celest className="h-5 text-black" />
        </Link>
      </div>
      <p>
        I'm building <InlineLink href="https://celest.tech">Celest</InlineLink>{" "}
        with my co-founder{" "}
        <InlineLink href="https://www.linkedin.com/in/marco-malacara-b89612152/">
          Marco Malacara
        </InlineLink>
        .{" "}
      </p>
      <div className="mt-12 flex">
        <Link href="https://procore.com" target="_blank">
          <Procore className="h-4 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://procore.com/jobsite" target="_blank">
          <Jobsite className="h-7 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://usesilo.com" target="_blank">
          <Silo className="h-6 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://assignar.com" target="_blank">
          <Assignar className="h-6 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://pacifica.edu" target="_blank">
          <Image className="w-24 invert" src={pacifica} alt="Pacifica" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://usekojo.com" target="_blank">
          <Kojo className="h-4 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://jordyhelps.com" target="_blank">
          <Jordyhelps className="h-7 text-black" />
        </Link>
      </div>
      <div className="mt-12 flex">
        <Link href="https://carlindunne.netlify.app" target="_blank">
          <Image className="w-8 grayscale" src={cd5} alt="CD5" />
        </Link>
      </div>
      <hr />
      <p>My other side projects:</p>
      <Ul>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/joshbradley-hugo"
            target="_blank"
          >
            Hugo theme (20 stars)
          </InlineLink>
        </Li>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/checkers"
            target="_blank"
          >
            Checkers
          </InlineLink>
        </Li>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/tic-tac-toe"
            target="_blank"
          >
            Tic-tac-toe
          </InlineLink>
        </Li>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/mini-react"
            target="_blank"
          >
            Mini react
          </InlineLink>
        </Li>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/appfolio-searchapp"
            target="_blank"
          >
            Appfolio scraper
          </InlineLink>
        </Li>
        <Li>
          <InlineLink
            href="https://github.com/joshuabradley012/tokenvalet"
            target="_blank"
          >
            Valet ticketing software
          </InlineLink>
        </Li>
      </Ul>
    </div>
  );
}
