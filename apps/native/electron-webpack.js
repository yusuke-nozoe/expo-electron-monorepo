const { withExpoAdapter } = require('@expo/electron-adapter');

module.exports = withExpoAdapter({
  projectRoot: __dirname,
  // Provide any overrides for electron-webpack: https://github.com/electron-userland/electron-webpack/blob/master/docs/en/configuration.md
  // webpack config is already located at electron/webpack.config.js
  whiteListedModules: ['ui'],
});
