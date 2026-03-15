import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5662',
      },
      {
        protocol: 'https',
        hostname: 'kcd3.ketivee.com',
      }
    ]
  }
};

export default nextConfig;
