/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['premiumtransfer33.ru'],
  },
  output: 'standalone',
}

module.exports = nextConfig
