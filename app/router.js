'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/codeAuth', 'home.codeAuth');
  app.get('/dict', 'dict.get_dict_array');
  app.get('/dict/edit', 'dict.edit_dict');

    app.get('/news', 'news.index');
    app.post('/news/create', 'news.create');
};
