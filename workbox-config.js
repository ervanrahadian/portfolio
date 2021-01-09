module.exports = {
  globDirectory: "./",
  globPatterns: ["**/*.{html,json,js,css,woff}"],
  swDest: "./sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|webp|svg)$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 20,
        },
      },
    },
  ],
};
