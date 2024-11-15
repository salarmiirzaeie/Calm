const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Define your custom configuration
const customConfig = {
  // Add any custom Metro configuration here
};

// Merge default config with custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with Reanimated's Metro configuration
const finalConfig = wrapWithReanimatedMetroConfig(mergedConfig);

module.exports = finalConfig;
