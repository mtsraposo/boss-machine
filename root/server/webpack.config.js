'use strict';

const path = require('path');

module.exports = {
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: "public/js"
    },
    resolve: {
        fallback: {"crypto": false,
        "buffer": false,
        "url": false,
        "stream": false,
        "querystring": false,
        "http": false,
        "zlib": false,
        }
    },
    mode: "development",
    context: __dirname,
    devtool: 'source-map'
};