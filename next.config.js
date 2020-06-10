const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css")
const withLess = require("@zeit/next-less")

const nextConfig = {
  webpack: (config, options) => {
    const {webpack} = options
    
    config.plugins.push(new webpack.ProvidePlugin({
      _ : "lodash"
    }))
    
    return config
  }
}

module.exports = withPlugins([
  [
    withCss, 
    {
      cssModules: false
    }
  ],
  [
    withLess,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    }
  ]
], nextConfig)