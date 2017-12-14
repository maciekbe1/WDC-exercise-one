var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var $ = require("jquery");

module.exports = {
  entry: './src/app.js',
  output: {
    // path: __dirname + '/dist',
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?outputPath=images/",
        options: {
          useRelativePath: true
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true
  },
  plugins: [
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.$': 'jquery', 'window.jQuery': 'jquery'}),
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({
      // minify: {
      //   collapseWhitespace: true
      // },
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
