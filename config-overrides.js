const PrerenderSPAPlugin = require('prerender-spa-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getHtmlWebpackPluginConfig = require('./config/htmlPluginConfig');
const data = require('./src/data/content.json');
const path = require('path');
const devLocale = 'en_ca';

module.exports = (config, env) => {
  // Override HtmlWebpackPlugin config for DEev & Prod
  const HtmlWebpackPluginIndex = config.plugins.findIndex(
    plugin => plugin instanceof HtmlWebpackPlugin
  );

  config.plugins.splice(HtmlWebpackPluginIndex, 1);
  const htmlPlugins = generateHTMLPlugins(env);

  config.plugins = htmlPlugins.concat(config.plugins);

  if (env === 'production') {
    const prerenderSPAPlugins = generatePrerenderSPAPlugins();

    config.plugins = config.plugins.concat(prerenderSPAPlugins);

    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false
      }
    };
    config.output.filename = 'app.js';

    config.plugins.forEach(plugin => {
      if (plugin instanceof MiniCssExtractPlugin) {
        plugin.options.filename = '[name].css';
      }
    });
  }

  return config;
};

function generateHTMLPlugins(env) {
  if (env === 'production') {
    return data.map(locale => {
      const config = getHtmlWebpackPluginConfig(env, locale.id);
      return new HtmlWebpackPlugin(config);
    });
  }

  return [new HtmlWebpackPlugin(getHtmlWebpackPluginConfig(env, devLocale))];
}

function generatePrerenderSPAPlugins() {
  return data.map(
    locale =>
      new PrerenderSPAPlugin({
        indexPath: path.join(__dirname, 'build', locale.id, 'index.html'),
        routes: ['/' + locale.id],
        staticDir: path.join(__dirname, 'build')
      })
  );
}
