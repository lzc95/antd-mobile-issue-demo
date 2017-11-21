const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./config/theme');
const svgDirs = require('./config/svg');

const ROOT_PATH = path.join(__dirname);
const APP_PATH = path.join(ROOT_PATH, 'app');
const BUILD_PATH = path.join(ROOT_PATH, 'build');
const NM_PATH = path.join(ROOT_PATH, 'node_modules');
const PORT = 3333;

module.exports = {
    entry: {
        app: [
            `${APP_PATH}/index.dev`,
        ],
    },

    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    resolve: {
        modules: [APP_PATH, NM_PATH],
        extensions: ['.ts', '.tsx', '.web.js', '.js', 'json'],
    },

    devServer: {
        host: 'localhost',
        port: PORT,
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: NM_PATH,
                use: [{
                    loader: 'babel-loader',
                    options: { cacheDirectory: true }
                }],
            },
            {
                test: /\.css$/,
                include: APP_PATH,
                use: [
                    'style-loader',
                    'css-loader?minimize&modules&importLoaders=1&localIdentName=[local]_[hash:base64:6]',
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                include: NM_PATH,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: `less-loader?{modifyVars:${JSON.stringify(theme)}}` }
                ],
            },
            {
                test: /\.css$/,
                include: NM_PATH,
                use: [
                    'style-loader',
                    'css-loader?minimize',
                    'postcss-loader'
                ],
            },
            // { test: /\.(svg)$/i, use: 'svg-sprite-loader', include: svgDirs },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('libs'),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['libs', 'app'],
            inject: 'body'
        })
    ]
};
