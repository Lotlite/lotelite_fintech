/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/loan-application',
        destination: '/loan-application',
      },
      {
        source: '/loan-application/:path*',
        destination: '/loan-application',
      },
      {
        source: '/property-loan',
        destination: '/property-loan',
      }
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
