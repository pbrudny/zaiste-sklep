/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["media.graphassets.com", "fakestoreapi.com", "naszsklep-api.vercel.app", "tailwindui.com"],
    formats: ["image/avif", "image/webp"],
  }
}

module.exports = nextConfig
