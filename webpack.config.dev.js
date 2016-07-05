const webpack = require('webpack');
const path = require('path');
let env;

// Load environment variables
if (process.env.NODE_ENV === 'development') {
  env = require('./env/clientDev');
} else {
  env = require('./env/clientProd');
}

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
    new webpack.DefinePlugin({
      'process.env': {
        PROTOCOL: JSON.stringify(env.PROTOCOL),
        HOST: JSON.stringify(env.HOST),
        PORT: JSON.stringify(env.PORT),
        BOT_SERVICE: JSON.stringify(env.BOT_SERVICE),
        BOT_PORT: JSON.stringify(env.BOT_PORT),
        RECS_PROTOCOL: JSON.stringify(env.RECS_PROTOCOL),
        RECS_HOST: JSON.stringify(env.RECS_HOST),
        RECS_PORT: JSON.stringify(env.RECS_PORT),
      },
    }),
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
