var path = require('path'),
  HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./index",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')}
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './index.html'
    })
  ]
};