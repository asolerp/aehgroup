/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
