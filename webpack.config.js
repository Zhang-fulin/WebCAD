const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },

    module: {
        rules: [{
                test: /\.ts$/,
                use: [
                    // {
                    //   loader: 'babel-loader',
                    //   options:{
                    //     presets:[
                    //       "@babel/preset-env",
                    //       {
                    //         targets:{
                    //           'chrome':'88'
                    //         },
                    //         "corejs":'3',
                    //         "useBuiltIns":'usage '
                    //       }
                    //     ]
                    //   }
                    // },
                    'ts-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    resolve: {
        extensions: [".js", ".ts", ]
    }
};