const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        overlay: true,
        port: 8080
    },

    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[chunkhash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/app.pug',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css',
        })
    ]
});