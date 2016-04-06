var path = require('path');

module.exports = {
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')}
    ]
  }
};