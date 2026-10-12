"use client";

import { useEffect, useRef, useState } from "react";
import { useHash } from "@/lib/useHash";

type Heading = { id: string; text: string };

// Text of a heading without its decorative § link marker
function headingText(heading: HTMLHeadingElement) {
  const clone = heading.cloneNode(true) as HTMLHeadingElement;
  clone.querySelectorAll("[aria-hidden]").forEach((el) => el.remove());
  return clone.textContent?.trim() ?? "";
}

// Posts are hand-written JSX, so read the section headings from the rendered
// article rather than keeping a separate list in sync with each post. It sits
// beside the title rather than following the scroll, because sidenotes use
// the same gutter further down the page.
export default function TableOfContents() {
  const ref = useRef<HTMLElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const hash = useHash();

  useEffect(() => {
    const article = ref.current?.closest("article");
    if (!article) return;

    const elements = article.querySelectorAll<HTMLHeadingElement>("h2[id]");
    setHeadings(
      Array.from(elements, (el) => ({ id: el.id, text: headingText(el) })),
    );
  }, []);

  return (
    <nav
      ref={ref}
      aria-label="Table of contents"
      className="absolute top-0 left-full ml-12 hidden w-64 xl:block"
    >
      {headings.length >= 3 && (
        <ul className="space-y-1 text-xs leading-4">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                data-active={hash === `#${heading.id}`}
                className="block text-left text-neutral-400 transition-colors hover:text-neutral-900 data-[active=true]:text-neutral-900"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
