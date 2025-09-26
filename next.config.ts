import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable all hosts for Replit environment
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    }
  },
  // Allow cross-origin requests for Replit proxy
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co", 
    "localhost",
    "127.0.0.1",
    "*"
  ],
  // Additional settings for Replit compatibility
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
