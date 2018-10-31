module.exports = {
    configureWebpack: {
      output: {
          path: __dirname + "/cool-build"
      }
  },
  devServer: {
      disableHostCheck: true
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};