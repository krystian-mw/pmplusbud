const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");

const withSitemap = require("./utils/sitemap");
const withPreact = require("./utils/preact");

module.exports = withPlugins([
  // withPreact,
  withSitemap(),
  withPWA({
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
      runtimeCaching,
    },
  }),
]);