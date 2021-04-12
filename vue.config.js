module.exports = {
  publicPath: '/s-saito.com/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/combine.scss";'
      }
    }
  }
};