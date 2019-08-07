// NPM plugins
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  resolve: {
    alias: {
      tailwinds: path.resolve(__dirname, 'src/styles/tailwind.scss')
    }
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:4200/'
    },
    {
      reload: false
    }),

    // Extract any CSS from any javascript file to process it as LESS/SASS using a loader
    new MiniCssExtractPlugin({
      fileame: "[name].bundle.css"
    }),

    // Minify CSS assets
    new OptimizeCSSAssetsPlugin({}),
  ],
  module: {
    rules: [
      {
        // Extract any SCSS content and minimize
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident  : 'postcss',
              syntax: 'postcss-scss',
              plugins: () => [
                require('postcss-import'),
                require('tailwindcss'),
                autoprefixer
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          }
        ]
      },
      {
        // Extract any CSS content and minimize
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
};
