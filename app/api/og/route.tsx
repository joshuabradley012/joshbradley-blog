import { feedConfig } from "@/lib/feedConfig";
import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";

export async function GET() {
  return renderOgImage(feedConfig.siteTitle);
}
