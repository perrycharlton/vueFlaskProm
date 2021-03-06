const path = require('path');

// const devMode = process.env.NODE_ENV !== 'production'
var webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    // WebpackMd5Hash = require('webpack-md5-hash'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin')
// global.jQuery = require('jquery');
// require('bootstrap');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/index.js',
        publicPath: "/dist"
    },
    

    node: {
        fs: 'empty'
    },
    devServer: {
        hot: true
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-3']
                        }
                    }

                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('precss'),
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }

                ]
            },

            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist', {}),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ 
            filename: 'static/style.css',
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            vue: true,
            // minify:true,
            inject: true,
            // hash: true,
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
              stylus: {
                import: [path.resolve(__dirname, '../src/scss/custom.scss')]
              }
            }
          })
    ]
};