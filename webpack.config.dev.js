console.log('Running Development Config: ./config/webpack.config.dev.js\n');

// IMPORTS
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const publicPath = '/';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/index.js',
  ],

  output: {
    pathinfo: true,
    filename: 'scripts/main.js',
    chunkFilename: 'scripts/[id].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
    runtimeChunk: true,
  },

  devServer: {
    compress: true,
    clientLogLevel: 'none',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    publicPath: publicPath,
    overlay: false,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 7168,
              // name: 'assets/[name].[hash:8].[ext]',
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            cacheDirectory: true,
            cacheCompression: false,
            sourceMaps: false,
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('precss'),
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "styles/_theme.scss";',
              includePaths: [__dirname, 'src'],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
