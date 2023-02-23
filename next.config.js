/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  }
};

module.exports = nextConfig;
