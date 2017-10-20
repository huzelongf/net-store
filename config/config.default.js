'use strict';

module.exports = appInfo => {
  const config = exports = {

      view : {
          defaultViewEngine: 'nunjucks',
          mapping: {
              '.tpl': 'nunjucks',
          }
      },
      sysConfig: {
          appKey: 'EC-4IETp5IG2',
          clientSecret: 'XlzkdrnXt3mZOi3I2',
          url: 'http://120.78.137.79:8095/code2UserInfo',
          userInfo: 'http://120.78.137.79:8095/api/user'
      }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_0123456789012';

  // add your config here
  config.middleware = [];

  return config;
};
