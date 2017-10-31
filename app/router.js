'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/codeAuth', 'home.codeAuth');
  app.get('/dict', 'dict.index');
  app.get('/dict/edit', 'dict.edit');
  app.get('/dict/create', 'dict.create');
  app.post('/dict/save', 'dict.save');

    app.get('/news', 'news.index');
    app.post('/news/create', 'news.create');


    app.get('/baseType/array', 'baseType.array');
};
