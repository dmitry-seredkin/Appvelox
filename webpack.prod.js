const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',

    entry: {
        main: './src/index.js',
        questions: './src/questions.js'
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/app.pug',
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/questions.pug',
            filename: 'questions.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].style.css'
        })

    ]
});