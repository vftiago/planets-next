import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    turbo: {
      rules: {
        "*.frag": {
          loaders: ["raw-loader", "glslify-loader"],
          as: "*.js",
        },
        "*.vert": {
          loaders: ["raw-loader", "glslify-loader"],
          as: "*.js",
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
