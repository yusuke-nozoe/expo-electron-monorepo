const { withExpoWebpack } = require('@expo/electron-adapter');

module.exports = config => {
  config.resolve.alias['ui'] = '../../packages/ui';
  config.resolve.extensions.push('.tsx')
  config.externals.splice(config.externals.indexOf('ui'), 1)
  return withExpoWebpack(config);
};
