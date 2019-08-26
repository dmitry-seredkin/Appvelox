const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',

    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'main.[chunkhash].js'
        filename: 'main.js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            // filename: 'style.[chunkhash].css'
            filename: 'style.css'
        })

    ]
});