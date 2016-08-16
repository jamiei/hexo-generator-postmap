var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.postmap = merge({
  xml_path: 'locations.xml',
  map_page_stub: 'postmap',
  map_page_title: 'Map of posts',
  google_maps_api_key: ''
}, hexo.config.postmap);


if (!pathFn.extname(config.xml_path)){
  config.xml_path += '.xml';
}

hexo.extend.generator.register('postmap', require('./lib/generator'));
