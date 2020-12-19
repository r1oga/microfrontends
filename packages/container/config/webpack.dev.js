const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}

module.exports = merge(commonConfig, devConfig)
