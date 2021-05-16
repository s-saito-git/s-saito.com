module.exports = {
  publicPath: '/s-saito.com/',
  outputDir: 'docs',
  baseUrl: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/combine.scss";'
      }
    }
  }
};