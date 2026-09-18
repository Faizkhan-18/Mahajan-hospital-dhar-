/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.beige-stork-289099.hostingersite.com',
      },
      {
        protocol: 'https',
        hostname: 'beige-stork-289099.hostingersite.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
