import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/vexy/index.html",
        },
        {
          source: "/case-studies/cybersecurity",
          destination: "/vexy/cybersecurity.html",
        },
        {
          source: "/case-studies/erp",
          destination: "/vexy/erp.html",
        },
        {
          source: "/case-studies/industrial-maintenance",
          destination: "/vexy/industrial-maintenance.html",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
