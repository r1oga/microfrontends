const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const shared = require('../package.json').dependencies
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/'
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

module.exports = merge(commonConfig, prodConfig)
