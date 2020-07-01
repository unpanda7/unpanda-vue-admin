const path = require('path')
const { devPort } = require('./src/config/settings')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  configureWebpack(config) {
    return {
      name: "admin-unpanda-vue",
      resolve: {
        alias: {
          "@": resolve("src"),
          "^": resolve("src/components")
        }
      }
    }
  },
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    // after: mockServer(),
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";',
      }
    }
  }
}