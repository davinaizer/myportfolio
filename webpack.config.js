//TODO: Add CSS minimizer

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
  filename: 'styles/[name].css',
  chunkFilename: 'styles/[id].css',
});

// WEBPACK CONF
module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js',
    chunkFilename: 'scripts/[name].bundle.js',
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
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
        use: { loader: 'babel-loader' },
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
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
              url: false,
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
              includePaths: [__dirname, 'src'],
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
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [CleanPlugin, HtmlPlugin, MiniCssPlugin],
};
