/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'my.spline.design']
  },
  env:{
    URL: process.env.URL
  }
};

module.exports = nextConfig;
