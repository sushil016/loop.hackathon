import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  // Exclude Backend folder from Next.js build
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/Backend/**', '**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;
