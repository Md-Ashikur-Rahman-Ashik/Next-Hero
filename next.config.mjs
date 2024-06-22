/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/blogs",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
