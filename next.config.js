/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig,
module.exports = {
  images: {
    domains: ['dl.airtable.com', "firebasestorage.googleapis.com"],
    formats: ['image/avif', 'image/webp'],
  },
}
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})