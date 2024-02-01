/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "images.unsplash.com" },
      { hostname: "data.commercelayer.app" }
    ]
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
