const { withExpoWebpack } = require('@expo/electron-adapter');
const path = require('path')

module.exports = config => {
  config.resolve.alias['ui'] = '../../packages/ui';
  const withCallback = withExpoWebpack(config)
  withCallback.module.rules.push({
    test: /\.(tsx?)$/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, '../../../packages/ui')
  })
  return withCallback
};
