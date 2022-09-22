/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    API_KEY: process.env.TINYURL_API_KEY,
  },
  reactStrictMode: false,
  swcMinify: true,
};
