'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg -- adc';
      //test
        //0
    }
  }
  return HomeController;
};
