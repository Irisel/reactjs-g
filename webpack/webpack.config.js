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
               loader: 'babel',
               exclude: /(node_modules)/,
               query: {
                    presets: ['/usr/local/lib/node_modules/babel-preset-react', '/usr/local/lib/node_modules/babel-preset-es2015']
               }
           }
        ]
    }
}
