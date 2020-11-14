module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "LzyDev @lzy3me";
      return args;
    });
  }
};
