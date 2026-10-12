import { createFeed } from "@/lib/feedConfig";

export const dynamic = "force-static";

export function GET() {
  return new Response(createFeed().atom1(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
