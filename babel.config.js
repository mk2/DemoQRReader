module.exports = {
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
        globals: ['__scanCodes'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
