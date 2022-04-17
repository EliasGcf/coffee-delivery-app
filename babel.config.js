module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      ['root-import', { rootPathSuffix: './src', rootPathPrefix: '~/' }],
      'react-native-reanimated/plugin',
    ],
  };
};
