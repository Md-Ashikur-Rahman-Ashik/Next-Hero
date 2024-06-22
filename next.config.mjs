/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
