import { createFeed } from "@/lib/feedConfig";

export const dynamic = "force-static";

export function GET() {
  return new Response(createFeed().rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
