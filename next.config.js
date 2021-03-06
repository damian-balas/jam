/* eslint-disable no-param-reassign */
module.exports = {
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader.includes('css-loader') &&
          typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
              exportLocalsConvention: 'camelCase',
            },
          };
        }
      });
    });
    return config;
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};
