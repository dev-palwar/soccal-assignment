/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "assets-in.bmscdn.com"], // Add this line
  },
  // other configurations...
};

module.exports = nextConfig;
