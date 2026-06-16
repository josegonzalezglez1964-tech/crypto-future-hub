/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crypto-future-hub', // <-- Añade esta línea (¡con la barra delante!)
  assetPrefix: '/crypto-future-hub/', // <-- Añade esta línea (¡con barras delante y detrás!)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
