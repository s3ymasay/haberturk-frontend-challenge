/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/haberturk-frontend-challenge',
  basePath: '/haberturk-frontend-challenge'
}

module.exports = nextConfig