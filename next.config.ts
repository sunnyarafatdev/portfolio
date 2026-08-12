import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare deployment: disable Next's built-in optimizer.
    // Swap this for a Cloudflare Images loader later if you want on-the-fly resizing.
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
