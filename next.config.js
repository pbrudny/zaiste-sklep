/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["fakestoreapi.com", "naszsklep-api.vercel.app", "tailwindui.com"],
    formats: ["image/avif", "image/webp"],
  }
}

module.exports = nextConfig
