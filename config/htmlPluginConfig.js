const path = require('path');
const templatePath = path.resolve(__dirname + '/../public/index.html');

module.exports = function getHtmlWebpackPluginConfig(env, localeId) {
  const filename = `${localeId}/index.html`;

  return Object.assign(
    {},
    {
      inject: true,
      template: templatePath,
      filename: env === 'production' ? filename : 'index.html',
      templateParameters: (compilation, assets, assetTags, options) => {
        return {
          compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            tags: assetTags,
            files: assets,
            options
          },
          locale: localeId
        };
      }
    },
    env === 'production'
      ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }
      : undefined
  );
};
