'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = {
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'],
        }
      }
    ]
  }
};