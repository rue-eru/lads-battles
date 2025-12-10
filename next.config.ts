import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    typescript: {
    ignoreBuildErrors: true, // ← Speeds up dev significantly
  },
  eslint: {
    ignoreDuringBuilds: true, // ← Also helps
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
