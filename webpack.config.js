const path = require('path');

const root = __dirname;

/* eslint-disable */
// import {babelConfig, distPath, publicPath, assets} from '../shared';
// import entries, {root} from '../entries';
// import {isArray, forEach} from 'lodash';

// const root = '.';
module.exports = {
    entry: './app/index',
    output: {
        filename: '[name].js',
        path: path.join(root, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [ '.js', '.jsx'],
        modules: ['node_modules']
    },
    // resolveLoader: {
    //     modules: ['node_modules', 'loaders'],
    //     extensions: [".loader.js", ".js"],
    // },
    // resolveLoader: {
    //     modules: ['node_modules', 'loaders'],
    //     extensions: [".loader.js", ".js"],
    // },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [path.join(root, 'app')],
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            babelrc: true
                        }
                    },
                ]
            },

        ]
    },
};
