import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  typescript: {
    // Set this to false if you want to deploy despite TypeScript errors
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
