const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const shared = require('../package.json').dependencies

const devConfig = {
  mode: 'development',
  output: { publicPath: 'http://localhost:8083/' },
  devServer: {
    port: 8083,
    historyApiFallback: { index: 'index.html' },
    headers: { 'Access-Control-Allow-Origin': '*' } // avoid CORS issue when loading fonts etc
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/bootstrap' },
      shared
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
