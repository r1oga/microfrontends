const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const shared = require('../package.json').dependencies
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: { port: 8080, historyApiFallback: { index: 'index.html' } },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
