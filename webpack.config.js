module.exports = {
  entry: __dirname + '/client/src',
  output: {
    path: __dirname +'/compiled',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /.jsx?$/,
        loader: "babel-loader",
        exclude: 'node_modules, server, compiled',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'sourcemap'
};
