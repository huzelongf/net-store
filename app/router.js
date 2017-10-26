'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/codeAuth', 'home.codeAuth');
  app.get('/dict', 'dict.index');
  app.get('/dict/edit', 'dict.edit');
  app.post('/dict/update', 'dict.update');

    app.get('/news', 'news.index');
    app.post('/news/create', 'news.create');
};
