/**
 * All configuration item explanations can be find in https://cli.vuejs.org/config/
 */
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 9527,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        // ws: false,
        pathRewrite: {
          "^/api": "/",
        }
      }
    }
  }
}
