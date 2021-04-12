module.exports = {
  publicPath: './',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/combine.scss";'
      }
    }
  }
};