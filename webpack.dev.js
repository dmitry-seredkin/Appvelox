const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        overlay: true,
        port: 8080
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[chunkhash].js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css',
        })
    ]
});