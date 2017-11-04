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

    /*baseType*/
    app.get('/baseType/array', 'baseType.array');
    app.get('/baseType', 'baseType.list');
    app.get('/baseType/edit', 'baseType.edit');
    app.get('/baseType/create', 'baseType.create');
    app.post('/baseType/save', 'baseType.save');
    /*baseDict*/
    app.get('/baseDict/index', 'baseDict.index');
    app.get('/baseDict', 'baseDict.list');
    app.get('/baseDict/create', 'baseDict.create');
    app.get('/baseDict/edit', 'baseDict.edit');
    app.post('/baseDict/save', 'baseDict.save');
    app.put('/baseDict/update', 'baseDict.update');
};
