/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const pwaConfig = {
  dest: "public",
};
const settings = {};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(Object.assign(settings, pwaConfig));
