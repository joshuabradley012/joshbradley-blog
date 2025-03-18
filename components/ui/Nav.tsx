"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

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

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="mr-8 flex flex-col gap-1 text-right">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-active={isActive(pathname, link.href)}
          className="font-serif text-neutral-400 italic transition-colors hover:text-black data-[active=true]:text-black"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
