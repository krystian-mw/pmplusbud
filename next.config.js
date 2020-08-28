const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withCSS(
  withSass(
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        runtimeCaching,
      },
    })
  )
);
