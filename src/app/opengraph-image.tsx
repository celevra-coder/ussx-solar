import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4efe7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          color: "#17324f",
        }}
      >
        <div
          style={{
            width: 980,
            display: "flex",
            alignItems: "center",
            gap: 54,
          }}
        >
          <div
            style={{
              width: 320,
              height: 220,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 4,
                left: 194,
                width: 74,
                height: 74,
                borderRadius: "50%",
                background: "#d7af47",
              }}
            />

            <div
              style={{
                width: 220,
                height: 118,
                background: "#234f7f",
                border: "8px solid #bcc9d3",
                transform: "rotate(-8deg)",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: 4,
                padding: 6,
                boxShadow: "0 18px 30px rgba(23,50,79,.18)",
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    border: "2px solid rgba(230,239,246,.8)",
                    background: "#173b63",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 88,
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              USS X
            </div>

            <div
              style={{
                marginTop: 16,
                fontSize: 26,
                letterSpacing: "0.5em",
                color: "#7188a1",
                fontFamily: "Arial, sans-serif",
              }}
            >
              SOLAR
            </div>

            <div
              style={{
                marginTop: 40,
                fontSize: 34,
                color: "#365a7f",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Фотоволтаични системи за дома и бизнеса
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
