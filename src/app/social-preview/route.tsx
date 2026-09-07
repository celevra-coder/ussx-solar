import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#f4efe7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#17324f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <div
            style={{
              width: "330px",
              height: "230px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "78px",
                height: "78px",
                borderRadius: "50%",
                background: "#d7af47",
                top: "5px",
                right: "25px",
              }}
            />

            <div
              style={{
                width: "240px",
                height: "135px",
                background: "#234f7f",
                border: "8px solid #afbdc9",
                transform: "rotate(-8deg)",
                display: "flex",
                flexWrap: "wrap",
                padding: "8px",
                gap: "4px",
                boxShadow: "0 20px 30px rgba(23,50,79,.2)",
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#173b63",
                    border: "2px solid #dfe9f1",
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
                fontSize: "92px",
                fontFamily: "Georgia",
                letterSpacing: "12px",
              }}
            >
              USS X
            </div>

            <div
              style={{
                marginTop: "10px",
                fontSize: "30px",
                fontFamily: "Arial",
                letterSpacing: "18px",
                color: "#7188a1",
              }}
            >
              SOLAR
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
