import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Satori can't read woff2, so ask Google Fonts for a TTF subset that only
// covers the characters in the title. This runs at build time only.
async function loadInter(text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@500&text=${encodeURIComponent(text)}`,
  ).then((res) => res.text());
  const url = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!url) {
    throw new Error("Failed to load Inter for the OG image");
  }
  return fetch(url).then((res) => res.arrayBuffer());
}

export async function renderOgImage(title: string) {
  return new ImageResponse(
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        padding: "60px 60px 60px 60px",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          fontSize: 48,
          color: "white",
          backgroundColor: "black",
          lineHeight: 1,
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
          color: "black",
          lineHeight: 1.4,
          marginTop: "auto",
          whiteSpace: "pre-wrap",
          textWrap: "balance",
        }}
      >
        {title}
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        {
          name: "Inter",
          data: await loadInter(`§${title}`),
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
