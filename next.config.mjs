/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignores ESLint errors during builds (e.g., Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
