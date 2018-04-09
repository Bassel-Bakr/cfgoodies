const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: "./index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    this.mode === "development" ||
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false // remove comments
          },
          compress: {
            unused: true,
            dead_code: true, // big one--strip code that will never execute
            warnings: false, // good for prod apps so users can't peek behind curtain
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            drop_console: true, // strips console statements
            sequences: true,
            booleans: true
          }
        }
      })
  ]
};
