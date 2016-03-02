var path = require('path');
module.exports = {
    entry: '../react/app.js',
    output: {
        path: '../build',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        root: path.resolve('/usr/local/lib', 'node_modules')
    },
    module: {
        loaders: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/
           }
        ]
    }
}
