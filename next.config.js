/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },



  
};

module.exports = nextConfig; 