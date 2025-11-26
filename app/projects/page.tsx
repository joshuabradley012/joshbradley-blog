import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { H1 } from "@/components/Headings";
import InlineLink from "@/components/InlineLink";
import { Ul, Li } from "@/components/List";
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
        I've had the pleasure of working on great projects with great people. I
        owe so much of my personal and professional growth to the teams I've
        been a part of.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://cd5.vercel.app/" target="_blank">
          <Image className="w-8 grayscale" src={cd5} alt="CD5" />
        </Link>
      </div>
      <p>
        I am working with the{" "}
        <InlineLink href="https://cd5.vercel.app/">
          Carlin Dunne Foundation
        </InlineLink>{" "}
        to build an application that helps users track their concussion
        recovery. With the help of AI, I rebuilt a legacy Gatsby project into a
        modern Next stack.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://jordyhelps.com/" target="_blank">
          <Jordyhelps className="h-6 text-neutral-900" />
        </Link>
      </div>
      <p>
        My life coach,{" "}
        <InlineLink href="https://jordyhelps.com/">Jordy</InlineLink>, is the
        greatest person I know. I worked with{" "}
        <InlineLink href="https://www.andrewantone.com/">
          Andrew Antone
        </InlineLink>{" "}
        to design her brand and then I built her a Next.js website.
      </p>

      <div className="mt-16 mb-8 flex">
        <Celest className="h-5 text-neutral-900" />
      </div>
      <p>
        I founded Celest to redefine Marketing Technology. But our runway was
        cut short. This experience humbled and refined me into a better engineer
        and person.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://procore.com/" target="_blank">
          <Procore className="h-3.5 text-neutral-900" />
        </Link>
      </div>
      <p>
        I worked at <InlineLink href="https://procore.com/">Procore</InlineLink>{" "}
        for 4 years, learning everything about digital marketing. I worked here
        pre- and post-IPO, experiencing how world class teams scale through
        hyper-growth.
      </p>
      <p>
        I wore many hats; web development, conversion rate optimization,
        analytics, reporting, paid ads, and SEO. It helped me understand how
        elite marketing teams operate.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://procore.com/jobsite" target="_blank">
          <Jobsite className="h-6 text-neutral-900" />
        </Link>
      </div>
      <p>
        I rebuilt{" "}
        <InlineLink href="https://procore.com/jobsite">Jobsite</InlineLink>,
        Procore's news website, on a modern, highly optimized, custom WordPress
        theme. I did this as a part of my efforts to improve SEO.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://usesilo.com/" target="_blank">
          <Silo className="h-5 text-neutral-900" />
        </Link>
      </div>
      <p>
        <InlineLink href="https://usesilo.com/">Silo</InlineLink> was my first
        client after founding Bradley Digital. I built them a cutting edge
        website on Next.js to represent their world-class brand and support
        their growing startup.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://assignar.com/" target="_blank">
          <Assignar className="h-6 text-neutral-900" />
        </Link>
      </div>
      <p>
        I assisted{" "}
        <InlineLink href="https://assignar.com/">Assignar</InlineLink> through
        three years of growth, modernizing their WordPress theme to suit their
        growing product and content needs.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://www.usekojo.com/" target="_blank">
          <Kojo className="h-4 text-neutral-900" />
        </Link>
      </div>
      <p>
        I implemented a full rebrand for{" "}
        <InlineLink href="https://www.usekojo.com/">Kojo</InlineLink> on their
        Webflow website. I also built their custom pricing quiz in React and
        implemented their web analytics and HubSpot forms.
      </p>

      <div className="mt-16 mb-8 flex">
        <Link href="https://pacifica.edu/" target="_blank">
          <Image className="w-24 invert" src={pacifica} alt="Pacifica" />
        </Link>
      </div>
      <p>
        <InlineLink href="https://www.pacifica.edu/">Pacifica</InlineLink> was
        the first big website I worked on back in 2017. I built key sections,
        including the navigation, the faculty page, and the article page in a
        custom WordPress theme.
      </p>

      <hr />

      <p>My other side projects:</p>

      <Ul>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/joshbradley-hugo">
            Hugo theme (20 stars)
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/checkers">
            Checkers
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/tic-tac-toe">
            Tic-tac-toe
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/mini-react">
            Mini react
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/appfolio-searchapp">
            Appfolio scraper
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://github.com/joshuabradley012/tokenvalet">
            Valet ticketing software
          </InlineLink>
        </Li>
      </Ul>
    </div>
  );
}
