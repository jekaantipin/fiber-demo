const path = require('path');
const root = __dirname;

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
