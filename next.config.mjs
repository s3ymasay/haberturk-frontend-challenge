/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages repository adınızı buraya yazın
  basePath: process.env.NODE_ENV === 'production' ? '/haberturk-frontend-challenge' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/haberturk-frontend-challenge' : '',
};

export default nextConfig;