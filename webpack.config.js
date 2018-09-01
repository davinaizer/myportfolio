// IMPORTS
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// VARS DEF
const devMode = process.env.NODE_ENV !== 'production';

// PLUGINS DEF
const CleanPlugin = new CleanWebpackPlugin(['dist/*']);

const HtmlPlugin = new HtmlWebPackPlugin({
  template: './src/app/index.html',
  filename: './index.html',
});

const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
});

// WEBPACK CONF
module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      // components: "./src/components/",
      // img: "./src/img/"
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
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: devMode
                ? '[path][name].[ext]'
                : '[path][hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {url: false, sourceMap: devMode}},
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
          {loader: 'sass-loader', options: {sourceMap: devMode}},
        ],
      },
    ],
  },

  plugins: [CleanPlugin, HtmlPlugin, MiniCssPlugin],
};
