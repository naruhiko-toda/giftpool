/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa");

const pwaConfig = {
  dest: "public",
};

const coverageConfig = () => ({
  distDir: ".next_coverage",
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        plugins: ["istanbul"],
        presets: ["next/babel"],
      },
    });
    return config;
  },
});

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackConfig = {
  silent: true,
  org: "giftpool",
  project: "giftpool",
};
const sentryConfig = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

const settings = {};

module.exports = () => {
  if (process.env.NODE_ENV === "production") {
    return withPWA(Object.assign(settings, pwaConfig));
  }
  if (process.env.COVERAGE) {
    return Object.assign(settings, coverageConfig());
  }
  return settings;
};

module.exports = withSentryConfig(module.exports, sentryWebpackConfig, sentryConfig);
