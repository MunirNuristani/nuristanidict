/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withPWA = require('next-pwa')

module.exports = nextConfig,

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
module.exports = {
  images: {
    domains: ['dl.airtable.com', "firebasestorage.googleapis.com"],
    formats: ['image/avif', 'image/webp'],
  },
}
