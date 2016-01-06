var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.postmap = merge({
  xmlpath: 'locations.xml',
  mappagestub: 'postmap',
  mappagetitle: 'Map of posts'
}, hexo.config.postmap);

if (!pathFn.extname(config.locationpath)){
  config.locationpath += '.xml';
}

hexo.extend.generator.register('postmap', require('./lib/generator'));