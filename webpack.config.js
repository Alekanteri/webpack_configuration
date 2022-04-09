const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ["test"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: `./src/html/${name}.html`,
    filename: `${name}.html`,
    chunks: ["main"],
  });
});

module.exports = {
  entry: {
    main: "./src/main.ts",
  },
  output: {
    filename: "js/[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[hash]_[name].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/html/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
  ].concat(multipleHtmlPlugins),
};
