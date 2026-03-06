/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: "/Ecom_Medimall",
  assetPrefix: "/Ecom_Medimall/",
};

module.exports = nextConfig;