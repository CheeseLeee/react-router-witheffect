const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common,{
    devtool: 'source-map',
    mode:'development',
    entry: {    
      app: '../examples/index.tsx'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".tsx", ".jsx",".js",".ts"]
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname),
        library: {
          type: 'commonjs-module',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: '../src/template/index.html'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },
})



