const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
    }),
  ],
});
