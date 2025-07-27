import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this array to allow local network/devices to access dev server:
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.138:3000",   // Your LAN IP and port
  ],
};

export default nextConfig;
