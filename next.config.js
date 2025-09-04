/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/course",
        destination: "/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    strapiUrl: "http://localhost:1337/api",
    uploads: "http://localhost:1337",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
