'use strict';

module.exports = appInfo => {
  const config = exports = {

      csrf: false,
      xframe: {
          enable: false,
      },
      security: {
          csrf: {
              ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
          },
      },

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
      },
      api: {
          remote: 'http://120.78.137.79:8096',
          //api_dict_type: 'http://120.78.137.79:8096/api/dict/type/EC-4IETp5IG2',
          get_api_dict_type : function () {
              return `${this.remote}/api/dict/type/${config.sysConfig.appKey}`;
          },

          //'http://120.78.137.79:8096/api/dict/2'
          get_api_dict_type_single : function (id) {
              return `${this.remote}/api/dict/type/id/${id}`;
          }
      }
  };



  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_0123456789012';

  // add your config here
  config.middleware = [];

  return config;
};
