const express = require('express');
const path = require('path');

// webpack / hmre
const config = require('../webpack.config.dev.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('*', (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(8000, () => {
  console.log('listening *:8000');
});
