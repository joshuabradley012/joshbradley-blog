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
            padding: "60px 60px 60px 60px",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontStyle: "normal",
              fontFamily: "Inter",
              color: "white",
              backgroundColor: "black",
              textAlign: "center",
              lineHeight: 1,
              whiteSpace: "pre-wrap",
              position: "absolute",
              top: 24,
              right: 24,
              borderRadius: 9999,
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            §
          </div>
          <div
            style={{
              fontSize: 64,
              fontStyle: "normal",
              fontFamily: "Inter",
              color: "black",
              lineHeight: 1.4,
              marginTop: "auto",
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
