/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Allow all domains, no optimization
  },
};

export default nextConfig;
