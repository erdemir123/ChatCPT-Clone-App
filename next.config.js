/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    images: {
      domains: ["wpwww-prod.s3.us-west-2.amazonaws.com"],
    },
  },
};

module.exports = nextConfig;
