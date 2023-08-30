/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 3,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      }
    ]
  }
}

module.exports = nextConfig
