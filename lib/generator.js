var ejs = require('ejs');
var pathFn = require('path');
var fs = require('fs');

var locationsSrc = pathFn.join(__dirname, '../locations.ejs');
var locationsTmpl = ejs.compile(fs.readFileSync(locationsSrc, 'utf8'));

var mapEmbedSrc = pathFn.join(__dirname, '../mapembed.ejs');
var mapEmbedTmpl = ejs.compile(fs.readFileSync(mapEmbedSrc, 'utf8'));

module.exports = function(locals) {
  var config = this.config;

  var posts = [].concat(locals.posts.toArray(), locals.pages.toArray())
    .filter(function(post) {
      return post.location != null;
    });

  var xml = locationsTmpl({
    config: config,
    posts: posts
  });

  return [{
    path: config.postmap.xml_path,
    data: xml
  }, {
    path: config.postmap.map_page_stub + '/index.html',
    data: {
      'title': config.postmap.map_page_title,
      'content': mapEmbedTmpl({
        'url': encodeURI(config.root + config.postmap.xml_path),
        'google_maps_api_key': config.postmap.google_maps_api_key
      }),
      'description': 'A map of geo-tagged posts on ' + config.title
    },
    layout: ['page']
  }];

};