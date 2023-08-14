module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          root:['./src'],
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            '@common': './src/common',
            '@interface': './src/interface',
            // '@svg': './src/assets/svg',
            '@services': './src/services',
          }
        }
      ]
    ]
  };
};
