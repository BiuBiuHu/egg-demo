'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.http = {
  enable: true,
  package: 'egg-axios'
}

exports.xtpl = {
  enable: true,
  package: 'egg-view-xtpl',
};