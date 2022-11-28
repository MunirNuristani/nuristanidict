/** @type {import('next').NextConfig} */
const nextConfig = {

}
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = nextConfig,

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  reactStrictMode: true,

  images: {
    domains: ["dl.airtable.com", "firebasestorage.googleapis.com", "v5.airtableusercontent.com"],
    formats: ['image/avif', 'image/webp'],
  },
})
