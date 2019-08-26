const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sc|c)ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                exclude: [path.resolve(__dirname, './src/images'), path.resolve(__dirname, './src/common.blocks')],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }

                ]
            },
            {
                test: /\.(jp(e)?g|png|svg)$/,
                exclude: path.resolve(__dirname, './src/fonts'),
                use : [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-url-loader',
            //     options: {
            //         limit: 10 * 1024,
            //         noquotes: true,
            //     }
            // }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/main.pug',
            filename: 'index.html'
        }),
    ],

    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'node_modules')
        }
    }
};