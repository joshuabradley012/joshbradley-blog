'use client'

import LoadWrapper from '@/components/ui/LoadWrapper'
import InlineLink from '@/components/ui/InlineLink'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname();

  return (
    <LoadWrapper>
      <div className="p-24 flex">
        {/* <div className="rounded-full bg-[#5F46BA] w-8 h-8 mb-12" /> */}
        <div className="flex flex-col gap-1 mr-8 text-base text-right">
          <InlineLink href="/" data-active={pathname === "/"} className="leading-[20px] text-neutral-400 font-serif italic no-underline data-[active=true]:text-black">about</InlineLink>
          <InlineLink href="/thoughts" data-active={pathname === "/thoughts"} className="leading-[20px] text-neutral-400 font-serif italic no-underline data-[active=true]:text-black">thoughts</InlineLink>
          {/* <InlineLink href="/projects" className="font-serif italic no-underline">projects</InlineLink> */}
        </div>
        <div className="max-w-xl pl-8 border-l border-neutral-200">
          <h1 className="font-medium text-black mb-8">Josh Bradley</h1>
          <div className="space-y-4">
            <p>I seek the wisdom needed to live a great life. I write about philosophy, technology, spirituality, business, and politics.</p>
            <p>Currently I am building <InlineLink href="https://celest.tech">Celest</InlineLink>, a marketing tool for AI. By creating value for others, I hope to dedicate my time towards gaining and sharing knowledge.</p>
            <p>I'm a self-taught engineer, UC Davis dropout, ex-Procore IPO, and the founder of <InlineLink href="https://bradleydigital.agency">Bradley Digital</InlineLink>. I grew up in Bakersfield and currently reside in LA.</p>
          </div>
          <hr className="border-neutral-200 my-8" />
          <div className="flex flex-wrap gap-4">
            <InlineLink href="mailto:hello@joshbradley.me">Email</InlineLink>
            <InlineLink href="https://x.com/josh_b_rad">Twitter</InlineLink>
            <InlineLink href="https://github.com/joshuabradley012">GitHub</InlineLink>
            <InlineLink href="https://www.linkedin.com/in/joshuabradley012/">LinkedIn</InlineLink>
            <InlineLink href="https://www.instagram.com/josh_b_rad/">Instagram</InlineLink>
          </div>
        </div>
      </div>
    </LoadWrapper>
  )
}
