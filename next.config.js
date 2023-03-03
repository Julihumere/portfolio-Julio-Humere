/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "my.spline.design"],
  },
  env: {
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
