const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: './dist/app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  devServer: {
    contentBase: './app',
    hot: true,
    open: true,
    port: 8081,
    stats: 'errors-only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Pipl',
      template: './app/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
