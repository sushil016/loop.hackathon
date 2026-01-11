import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  // Use empty turbopack config to silence webpack warning
  turbopack: {},
};

export default nextConfig;
