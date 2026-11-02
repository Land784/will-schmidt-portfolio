import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Spotify album art for the About page vinyl player
    remotePatterns: [{ protocol: "https", hostname: "image-cdn-ak.spotifycdn.com" }],
  },
};

export default nextConfig;
