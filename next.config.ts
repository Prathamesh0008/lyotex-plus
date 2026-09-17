import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.24"],
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/Input/services.html", destination: "/services", permanent: true },
      { source: "/Input/team.html", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
