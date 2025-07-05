/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/haberturk-frontend-challenge",
  assetPrefix: "/haberturk-frontend-challenge/",
};

module.exports = nextConfig;

console.log("✅ next.config.js yüklendi: basePath aktif");
