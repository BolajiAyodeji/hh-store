/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "images.unsplash.com" },
      { hostname: "data.commercelayer.app" }
    ]
  },
  env: {
    JSCOV: 0,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_DATASET,
    NEXT_PUBLIC_SANITY_TOKEN: process.env.SANITY_TOKEN,
    BUILD_LANGUAGES: process.env.BUILD_LANGUAGES,
    BUILD_CMS: process.env.BUILD_CMS,
    CL_CLIENT_ID: process.env.CL_CLIENT_ID,
    CL_ENDPOINT: process.env.CL_ENDPOINT
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
