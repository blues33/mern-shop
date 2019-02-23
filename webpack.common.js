const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: { user: "./client/user/index.js", auth: "./client/auth/index.js" },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "User",
      chunk: ["user"],
      template: "./resources/template.html",
      favicon: "./resources/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "Auth",
      chunk: ["auth"],
      template: "./resources/template.html",
      favicon: "./resources/favicon.ico"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].bundle.css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  } /*
  optimization: {
    minimizer: [new UglifyJsPlugin({ test: /\.(jsx|js)$/, sourceMap: true })]
  },*/,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
};
