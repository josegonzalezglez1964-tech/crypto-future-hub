/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crypto-future-hub', 
  assetPrefix: '/crypto-future-hub/', 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
