var webpack = require("webpack");

module.exports = {
  entry: {
    around_tokyo : "./src/main_around_tokyo.js",
    hokkaido     : "./src/main_hokkaido.js"
  },
  output: {
      path: __dirname + "/build",
      filename: "main_[name].bundle.js"
  },
  module: {
      loaders: [
        {
          test: /\.css$/,
          loader: "style!css?minimize"
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      d3: "d3"
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
