module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['root-import', { rootPathSuffix: './src', rootPathPrefix: '~/' }]],
  };
};
