const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/static/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/app/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },

  plugins: [htmlPlugin]
};
