const { withExpoWebpack } = require('@expo/electron-adapter');

module.exports = config => {
  config.resolve.alias['ui'] = '../../packages/ui';
  return withExpoWebpack(config);
};
