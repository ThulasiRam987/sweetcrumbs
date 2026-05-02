import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok domain
  allowedDevOrigins: [
    'kaila-subrostral-unprecipitately.ngrok-free.dev', 
    'localhost:3000'
  ],
};

export default nextConfig;
