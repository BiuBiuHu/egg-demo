'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538646517102_5092';

  // add your config here
  config.middleware = [];
  
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.xtpl': 'xtpl',
    },
  };
  
  config.blog = {
    serverUrl: 'https://blog.csdn.net/y491887095',
    timeout: 10000,
    replaceText: '阅读数：'
  };

  config.http = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    },
    timeout: 10000
  };


  return config;
};


