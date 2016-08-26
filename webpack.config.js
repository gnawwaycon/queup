var path = require('path');

var APP_DIR = path.resolve(__dirname, 'client/src');
var BUILD_DIR = path.resolve(__dirname, 'client/build');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR+ '/static/js',
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       exclude: /node_modules/,
       loader : 'babel'
     }
   ]
 }
};

module.exports = config;
