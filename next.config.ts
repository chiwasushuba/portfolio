import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Use this for static exports or if having optimization issues
    remotePatterns: [], // Add if you use external images later
  },
};

export default nextConfig;
