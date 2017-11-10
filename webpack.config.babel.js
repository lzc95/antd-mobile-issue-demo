const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const theme = require('./config/theme');
const CDNConfig = require('./config/cdn');
const svgDirs = require('./config/svg');

const ROOT_PATH = path.join(__dirname);
const APP_PATH = path.join(ROOT_PATH, 'app');
const BUILD_PATH = path.join(ROOT_PATH, 'build');
const NM_PATH = path.join(ROOT_PATH, 'node_modules');
const PORT = 8686;

module.exports = {
    entry: {
        libs: ['react-redux', 'redux', 'babel-polyfill', 'immutable', 'redux-saga'],
        app: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${PORT}`,
            'webpack/hot/only-dev-server',
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

    externals: {
        'react': 'react',
        'react-dom': 'ReactDOM',
    },

    devServer: {
        host: 'localhost',
        port: PORT,
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            '/elecwebtest': 'http://192.168.0.116:8080',
        }
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
                test: /\.ts?$/,
                loaders: ['babel-loader', 'ts-loader'],
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
            {
                test: /\.(woff|ttf|eot)(\?t=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader',
                include: APP_PATH
            },
            {
                test: /\.(gif|png|jpg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 5 }
                }]
            },
            { test: /\.(svg)$/i, use: 'svg-sprite-loader', include: svgDirs },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('libs'),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['libs', 'app'],
            inject: 'body'
        }),
        new WebpackCdnPlugin(CDNConfig),
        new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),

        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: function () {
                    return [
                        require('precss'),
                        require('autoprefixer'),
                    ];
                },
            }
        }),
    ]
};
