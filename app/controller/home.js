'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
      async index() {
          await  this.ctx.render('/index.html', {});
      }

      async codeAuth() {
          /* console.log(this.ctx.query.code +', state= ' + this.ctx.query.state);
          this.ctx.body = this.ctx.query.code +', state= ' + this.ctx.query.state ;*/

          //String code, String appKey, String clientSecret
          const code = this.ctx.query.code;
          const appKey = 'EC-4IETp5IG2';
          const clientSecret = 'XlzkdrnXt3mZOi3I2';
          const result = yield this.curl(`http://120.78.137.79:8095/code2UserInfo?code=${code}&appKey=${appKey}&clientSecret=${clientSecret}`);
          console.log(result.data);

          this.status = result.status;
          this.set(result.headers);
          this.body = result.data;
      }
  }
  return HomeController;
};
