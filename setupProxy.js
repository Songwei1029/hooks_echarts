/**
 * 开发环境请求代理
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(proxy('/api', {
  //   'target': 'http://47.94.90.194:8080',
  //   'changeOrigin': true,
  //   'pathRewrite': {
  //     '^/api': '/api'
  //   }
  // }));
  app.use('/api',proxy({
    'target': 'http://47.94.90.194:8080',
    // 'target': '',
    // 'target': 'haihepropaservice.wjtest.chinamcloud.cn',
    'changeOrigin': true,
    'pathRewrite': {
      '^/api': '/api'
    }
  }))
};
