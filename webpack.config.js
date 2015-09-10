module.exports = {
  entry: "./app/assets/frontend/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts/components",
    filename: "bundle.js"
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "babel-loader"
    }]
  }
};
