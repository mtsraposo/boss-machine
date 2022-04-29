'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

module.exports = {
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: "public/js"
    },
    mode: "development",
    context: __dirname,
    devtool: 'source-map'
};