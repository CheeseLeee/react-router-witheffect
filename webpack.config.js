const path = require('path');
module.exports = {
mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name]_bundle.ts',
    clean: true,
    library: {
      type: 'commonjs-static',
    },
  },
    plugins: [],
    context: path.resolve(__dirname),
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false,
                    },
                }
            }
        ]
    }, 

}