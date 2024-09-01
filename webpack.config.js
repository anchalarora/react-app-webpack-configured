var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  mode: "development",

  devServer: {
    port: 4321,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js|jsx/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.css$/, // match .css files
        use: ["style-loader", "css-loader"], // use style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

module.exports = config;
