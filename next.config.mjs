/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        HF_ACCESS_TOKEN: process.env.HF_ACCESS_TOKEN,
    },
};

export default nextConfig;
