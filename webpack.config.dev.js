const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    'webpack-hot-middleware/client', './client/client.js',
    './client/client.js',
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
        },
      },
    ],
  },
};
