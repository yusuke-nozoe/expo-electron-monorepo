const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['ui']
    }
  }, argv);
  console.log('config: ', config)
  // Customize the config before returning it.
  config.resolve.alias['ui'] = '../../packages/ui';
  return config;
};
