const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const shared = require('../package.json').dependencies

const devConfig = {
  mode: 'development',
  devServer: { port: 8081, historyApiFallback: { index: 'index.html' } },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/bootstrap' },
      shared
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
