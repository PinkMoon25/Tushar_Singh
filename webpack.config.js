const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif|pdf)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader",
        options:{
          name: "/images/[name].[ext]",
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }), 
    new Dotenv()
  ] 
};
