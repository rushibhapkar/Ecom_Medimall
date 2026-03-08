/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Ecom_Medimall",
  assetPrefix: "/Ecom_Medimall/",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;