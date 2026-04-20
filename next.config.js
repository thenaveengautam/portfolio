/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;