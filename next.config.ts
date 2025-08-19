import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaynszswuyhocsrbmjnx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
