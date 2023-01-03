// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lettercutter",
  assetPrefix: "/lettercutter/",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig

// {
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
// }
