import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.grofers.com", "5.imimg.com"], // Add allowed image domains here
  },
};

export default nextConfig;
