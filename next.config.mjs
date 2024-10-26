/** @type {import('next').NextConfig} */

const nextConfig = {
    // Chapter 10 : [PPR:Partial Prerendering]
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
