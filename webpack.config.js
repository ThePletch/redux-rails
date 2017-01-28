const webpack = require("webpack");

module.exports = {
  module: {
   loaders: [
     { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
   ]
  },
  entry: {
    main: "./src/index.js"
  },
  output: {
    library: 'Redux-Rails',
    libraryTarget: 'umd'
  },
  devtool: "cheap-module-eval-source-map"
}
