/** @type {import('next').NextConfig} */

// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
//   swcMinify: true,
//   // images: {
//   //   domains: ["localhost"],
//   //   remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "cdn.sanity.io",
//   //       port: "",
//   //     },
//   //   ],
//   // },
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
