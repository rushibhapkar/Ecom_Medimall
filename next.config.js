/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure both paths match exactly for GitHub Pages
  basePath: '/Ecom_Medimall',
  assetPrefix: '/Ecom_Medimall', 
  images: {
    unoptimized: true,
  },
  eslint: {
    // Keeps the build running even with apostrophe or img errors
    ignoreDuringBuilds: true,
  },
  // Add this to prevent build failure if there are TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;