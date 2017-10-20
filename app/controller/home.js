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

          //this.ctx.body = JSON.stringify(result.data)  +' \n \n\n userInfo : ' + JSON.stringify(result2.data);

          await this.ctx.render('/main.html', {});
      }
  }
  return HomeController;
};
