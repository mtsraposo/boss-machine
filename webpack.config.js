'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

module.exports = {
    entry: './browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: "public/js",
    },
    mode: "development",
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