const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: { modules: true },
      }],
    }],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080,
  },
});
