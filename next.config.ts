import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable all hosts for Replit environment
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    }
  },
  // Additional settings for Replit compatibility
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
