const path = require('path');
const webpack = require('webpack');
const replace = require('rollup-plugin-re')

module.exports = {
    entry: './test-web.js',
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [{test: /\.txt$/, use: 'raw-loader'}]
    },
  resolve: {
    fallback: {"url": false}
  },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000
    },
    plugins: [
      replace({
        patterns: [
          {
            test: /eval.*\(moduleName\);/g,
            replace: 'undefined;'
          }
        ]
      })
//        new webpack.LoaderOptionsPlugin({
//            // test: /\.xxx$/, // may apply this only for some modules
//            options: {
//                stream: require.resolve("stream-browserify"),
//                buffer: require.resolve("buffer/")
//            }
//        })
    ],
};
