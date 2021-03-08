module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ["macros"],
    presets: ['module:metro-react-native-babel-preset'],
  };
};
