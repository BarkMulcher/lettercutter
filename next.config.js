const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/lettercutter/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig, {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
