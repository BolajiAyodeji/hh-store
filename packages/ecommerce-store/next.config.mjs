/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }, { hostname: "images.unsplash.com" }]
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://hh-store-blog.vercel.app/blog"
      },
      {
        source: "/blog/:path*",
        destination: "https://hh-store-blog.vercel.app/blog/:path*"
      }
    ];
  }
};

export default nextConfig;
