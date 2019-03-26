import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from './paths';
import rules from './rules';
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
    entry: ['@babel/polyfill', paths.entryPath],
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css', '.jsx', '.jss','.tsx']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true
            }
        })
    ]
};
