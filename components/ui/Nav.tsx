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
    <nav className="xs:mr-6 xs:border-none xs:mb-0 xs:pb-0 mb-8 border-b border-neutral-200 pb-4 text-base leading-5 sm:mr-8 md:mr-12">
      <menu className="xs:flex-col xs:justify-start xs:gap-1 xs:text-right xs:sticky xs:top-6 flex flex-wrap justify-end gap-4 sm:top-12 md:top-24">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              data-active={isActive(pathname, link.href)}
              className="font-serif text-neutral-400 italic transition-colors hover:text-black data-[active=true]:text-black"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
