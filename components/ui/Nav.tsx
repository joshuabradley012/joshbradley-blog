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
    <div className="mb-8 flex justify-end gap-4 border-b border-neutral-200 pb-4 sm:mr-8 sm:mb-0 sm:flex-col sm:justify-start sm:gap-1 sm:border-none sm:pb-0 sm:text-right">
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
