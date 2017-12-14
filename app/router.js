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


   /*memberLevel*/
    app.get('/memberLevel/index', 'memberLevel.index');
    app.get('/memberLevel', 'memberLevel.list');
    app.get('/memberLevel/edit', 'memberLevel.edit');
    app.get('/memberLevel/create', 'memberLevel.create');
    app.post('/memberLevel/save', 'memberLevel.save');
    app.post('/memberLevel/update', 'memberLevel.update');

    /*userDepartment*/
    app.get('/userDepartment/index', 'userDepartment.index');
    app.get('/userDepartment', 'userDepartment.list');
    app.get('/userDepartment/edit', 'userDepartment.edit');
    app.get('/userDepartment/create', 'userDepartment.create');
    app.post('/userDepartment/save', 'userDepartment.save');
    app.post('/userDepartment/updateStatus', 'userDepartment.updateStatus');

    /*user*/
    app.get('/user/index', 'user.index');
    app.get('/user', 'user.list');
    app.get('/user/edit', 'user.edit');
    app.get('/user/create', 'user.create');
    app.get('/user/treeJson', 'user.treeJson');
    app.post('/user/save', 'user.save');
};
