'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
      async index() {
          await  this.ctx.render('/index.html', {});
      }

      async codeAuth() {
          const code = this.ctx.query.code;
          const {appKey, clientSecret, url, userInfo} = this.app.config.sysConfig;
          const result = await this.app.curl(`${url}?code=${code}&appKey=${appKey}&clientSecret=${clientSecret}`,{dataType: 'json'});
          console.log(result.data);
          console.log('------------------------------------');

          const token = 'Bearer ' +result.data.access_token;
          const result2 = await this.app.curl(`${userInfo}`, {
              method: 'POST',
              dataType: 'json',
              headers: { Authorization: token}
          });
          console.log(result2.data);
          console.log('------------------------------------');
          //this.ctx.body = JSON.stringify(result.data)  +' \n \n\n userInfo : ' + JSON.stringify(result2.data);

          const  api_dict_type = this.app.config.api.get_api_dict_type();
          console.log(api_dict_type);
          console.log('------------------------------------');
          const result3 = await this.app.curl(`${api_dict_type}`, {
              method: 'GET',
              dataType: 'json',
              headers: { Authorization: token}
          });
          console.log(result3.data);

          this.ctx.session.globalToken = result.data.access_token;
          await this.ctx.render('/main.html', {});
      }
  }
  return HomeController;
};
