

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/LetterCutter",
  // this is important:
    // changes to this returned the site to showing readme as the page
  assetPrefix: isProd ? "https://BarkMulcher.github.io/LetterCutter/gh-pages/" : '',
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig, {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
