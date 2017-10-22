const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const pwaManifest = {
  name: 'Jonogram',
  short_name: 'Jonogram',
  description: 'All things Jono',
  lang: 'en-US',
  start_url: './index.html',
  display: 'standalone',
  background_color: '#fafafa',
  orientation: 'portrait-primary',
  icons: [{
    src: path.resolve('src/images/android-icon.png'),
    sizes: [96, 128, 192, 256, 384, 512],
  }],
};

const mainPage = {
  title: 'Hello World',
  favicon: './src/images/favicon.ico',
  template: './src/index.html',
};

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build'], { verbose: true }),
    new HtmlWebpackPlugin(mainPage),
    new WebpackPwaManifest(pwaManifest),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
