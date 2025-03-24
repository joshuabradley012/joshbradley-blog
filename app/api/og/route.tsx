import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "JB";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "left",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              justifyItems: "center",
              padding: "0 180px",
            }}
          >
            <img
              alt="Josh Bradley"
              height={100}
              src="data:image/svg+xml,%3Csvg width='100' height='100' fill='#5F46BA' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' /%3E%3C/svg%3E"
              width={100}
            />
            <div
              style={{
                fontSize: 60,
                fontStyle: "normal",
                fontFamily: "Inter",
                color: "black",
                marginLeft: 60,
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
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
