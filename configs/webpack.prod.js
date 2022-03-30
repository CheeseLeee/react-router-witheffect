const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: '../src/index.tsx',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
  },
  output: {
    path: path.resolve(__dirname,'..','dist'),
    filename: '[name]_bundle.ts',
    clean: true,
    library: {
      type: 'commonjs-static',
    },
  },
  plugins: []
})