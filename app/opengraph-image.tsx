import { ImageResponse } from "next/og";

export const alt = "William Schmidt — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                }}
            >
                <div style={{ fontSize: 88, fontWeight: 700 }}>
                    William Schmidt
                </div>
                <div style={{ fontSize: 40, color: "#d1d5db", marginTop: 16 }}>
                    Software Engineer
                </div>
                <div style={{ fontSize: 28, color: "#6b7280", marginTop: 40 }}>
                    willschmidt.dev
                </div>
            </div>
        ),
        size,
    );
}
