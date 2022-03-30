const path = require('path');
module.exports = {
    context: path.resolve(__dirname),
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".tsx", ".jsx",".js",".ts"]
    },
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