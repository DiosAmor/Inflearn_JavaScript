const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    assetModuleFilename: "[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query][hash]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   templateParameters: {
    //     env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
    //   },
    //   minify:
    //     process.env.NODE_ENV === "production"
    //       ? {
    //           collapseWhitespace: true, // 빈칸 제거
    //           removeComments: true, // 주석 제거
    //         }
    //       : false,
    //   hash: process.env.NODE_ENV === "production",
    // }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
