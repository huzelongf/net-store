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


          get_baseType_Array : function () {
              return `${this.remote}/api/baseType/array/${config.sysConfig.appKey}`;
          },


          //api_dict_type: 'http://120.78.137.79:8096/api/dict/type/EC-4IETp5IG2',
          get_api_dict_type : function () {
              return `${this.remote}/api/baseType/clientId/${config.sysConfig.appKey}`;
          },

          //'http://120.78.137.79:8096/api/dict/2'
          get_api_dict_type_single : function (id) {
              return `${this.remote}/api/baseType/${id}`;
          },

          post_api_baseType: function () {
              return `${this.remote}/api/baseType`;
          },


          baseType_Array : function () {
              return `${this.remote}/api/baseType/array/${config.sysConfig.appKey}`;
          },
          baseType_sava: function () {
              return `${this.remote}/api/baseType`;
          },
          baseType_edit: function (id) {
              return `${this.remote}/api/baseType/${id}`;
          },
          baseType_list: function () {
              return `${this.remote}/api/baseType/clientId/${config.sysConfig.appKey}`;
          }
      }
  };



  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_0123456789012';

  // add your config here
  config.middleware = [];

  return config;
};
