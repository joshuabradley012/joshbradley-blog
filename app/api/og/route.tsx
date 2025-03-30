import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Josh Bradley";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "nowrap",
            padding: "40px 120px 40px 40px",
          }}
        >
          <div
            style={{
              fontSize: 860,
              fontStyle: "normal",
              fontFamily: "Inter",
              color: "#e5e5e5",
              marginLeft: 60,
              textAlign: "right",
              lineHeight: 1,
              whiteSpace: "pre-wrap",
              position: "absolute",
              top: -120,
              right: 0,
            }}
          >
            §
          </div>
          <div
            style={{
              fontSize: 94,
              fontStyle: "normal",
              fontFamily: "Inter",
              color: "black",
              marginLeft: 60,
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              textWrap: "balance",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
