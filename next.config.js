/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa");
const { withSentryConfig } = require("@sentry/nextjs");

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

const sentryWebpackPluginOptions = {
  silent: false,
  org: "giftpool",
  project: "giftpool",
};

const sentryNextJsOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

const settings = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = () => {
  let config = settings;

  if (process.env.COVERAGE) {
    config = Object.assign(config, coverageConfig());
  }

  if (process.env.NODE_ENV === "production") {
    console.log("this is production!!!");
    config = withPWA(Object.assign(config, pwaConfig));
    config = withSentryConfig(config, sentryWebpackPluginOptions, sentryNextJsOptions);
  }
  return config;
};
