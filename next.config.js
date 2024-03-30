/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  output: 'export',
  images: {
    unoptimized: false,
    remotePatterns: ['/public'],
  },
}

module.exports = nextConfig
