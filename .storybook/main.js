const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx", "../stories/*.stories.mdx", "../stories/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack")
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "_aui-[local]---[hash:base64:5]"
            }
          }
        },
        "sass-loader"
      ]
    });

    config.resolve.alias = {
      "@icons": path.resolve(__dirname, "../src/assets/icons"),
      "@images": path.resolve(__dirname, "../src/assets/images"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@controlConfigs": path.resolve(__dirname, "./controlConfigs")
    };

    return config;
  }
};
