import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    typescript: {
    ignoreBuildErrors: true, // ← Speeds up dev significantly
    },
    productionBrowserSourceMaps: false, // eats a lot of space in production
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: ""
            }
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
