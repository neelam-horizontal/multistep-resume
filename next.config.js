/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn-icons-png.flaticon.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "encrypted-tbn0.gstatic.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
