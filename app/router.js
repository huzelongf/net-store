'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/codeAuth', 'home.codeAuth');
};
