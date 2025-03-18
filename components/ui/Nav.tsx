import Link from 'next/link'
import InlineLink from '@/components/ui/InlineLink'

export default function Nav() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-4">
        <InlineLink href="/" className="font-serif italic no-underline">about</InlineLink>
        <InlineLink href="/thoughts" className="font-serif italic no-underline">thoughts</InlineLink>
        {/* <InlineLink href="/projects" className="font-serif italic no-underline">projects</InlineLink> */}
      </div>
    </div>
  );
}