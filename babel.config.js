module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './assets',
            '@components': './src/components',
            '@utils': './src/utils',
            '@types': './src/types'
          },
        },
      ],
    ],
  };
};
