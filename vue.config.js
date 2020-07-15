module.exports = {
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    });
    const entry = config.entry('app');
    entry.add('babel-polyfill').end();
    entry.add('classlist-polyfill').end();
    entry.add('@/mock').end();
  },
  devServer: {
    port: 1888,

    //反向代理配置
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://localhost:9101',
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        //测试接口地址
        target: 'http://2rqpyc.natappfree.cc',
        //target:'http://kp5hk2.natappfree.cc',
        //target:'http://cyf.ngrok2.xiaomiqiu.cn',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
