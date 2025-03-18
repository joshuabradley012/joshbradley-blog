import { NextResponse } from "next/server";
import { Feed } from "feed";
import { getAllPosts } from "@/lib/posts";
import {
  createFeedOptions,
  createFeedItems,
  feedConfig,
} from "@/lib/feedConfig";

export async function GET() {
  const posts = getAllPosts();
  const feedOptions = createFeedOptions();
  const feed = new Feed(feedOptions);

  // Add items to feed
  const feedItems = createFeedItems(posts, feedConfig.siteUrl);
  feedItems.forEach((item) => feed.addItem(item));

  return new NextResponse(feed.json1(), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
