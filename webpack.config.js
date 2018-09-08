// IMPORTS
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// VARS DEF
const isDevMode = process.env.NODE_ENV !== 'production';

// PLUGINS DEF
const CleanPlugin = new CleanWebpackPlugin(['dist/*']);
const HtmlPlugin = new HtmlWebPackPlugin({
  template: './src/app/index.html',
  filename: './index.html',
});
const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: isDevMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
});

// WEBPACK CONF
module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      Components: './src/app/components/',
      Containers: './src/app/containers/',
      Images: './src/app/img/',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'},
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: isDevMode,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "app/styles/_theme.scss";',
              includePaths:[__dirname, 'src'],
              sourceMap: isDevMode,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: isDevMode
                ? 'img/[name].[ext]'
                : 'img/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [CleanPlugin, HtmlPlugin, MiniCssPlugin],
};
