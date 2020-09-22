const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.ts", "./src/css/index.scss"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV !== "production" ? "development" : "production",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./src/assets"), to: "assets" },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
