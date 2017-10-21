var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './static/js/app.js',
    output: {
        path: path.resolve(__dirname, './static/dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]

            }
        ]
    },
    stats: {
        colors: true

    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     // ....
        // })
    ]
};