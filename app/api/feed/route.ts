import { createFeed } from "@/lib/feedConfig";

export const dynamic = "force-static";

export function GET() {
  return new Response(createFeed().json1(), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
    },
  });
}
