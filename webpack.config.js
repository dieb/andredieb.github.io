'use strict';

const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Copy = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: "app.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css!sass")
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css"),
    new Copy([
      {
        from: './app/html',
        to: './'
      }
    ]),
  ]
};
