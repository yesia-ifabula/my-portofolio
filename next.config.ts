import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    images: {
      unoptimized: true, // wajib kalau ada <Image /> Next.js
    },
};

export default nextConfig;
