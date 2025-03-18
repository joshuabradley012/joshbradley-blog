"use client";

import { usePathname } from "next/navigation";
import InlineLink from "@/components/ui/InlineLink";

const links = [
  {
    href: "/",
    text: "about",
  },
  {
    href: "/thoughts",
    text: "thoughts",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="mr-8 flex flex-col gap-1 text-right">
      {links.map((link) => (
        <InlineLink
          key={link.href}
          href={link.href}
          data-active={
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href))
          }
          className="font-serif text-neutral-400 italic no-underline data-[active=true]:text-black"
        >
          {link.text}
        </InlineLink>
      ))}
    </div>
  );
}
