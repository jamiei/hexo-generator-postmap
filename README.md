# hexo-generator-postmap

Generates a locations.xml and page showing an interactive Google map embed with your posts/pages marked on the map with pop up links to your posts/pages.

This package is still pretty rough around the edges and is not recommended for anything important yet.

You should tag posts by putting the lat and long in the location metadata:

```yaml
location: [50.092953, 14.445974]
```

## Install

``` bash
$ npm install hexo-generator-postmap --save
```

- Hexo 3: 0.1.x

## Options

You can configure this plugin in `_config.yml`.

``` yaml
postmap:
  xmlpath: 'locations.xml',
  mappagestub: 'mapofposts',
  mappagetitle: 'Map of posts'
```

- **xmlpath** - Path to your locations.xml document.
- **mappagestub** - The url friendly name of your map page without slashes (eg mapofposts)
- **mappagetitle** - The human friendly name of your map page, used as the hexo title of page.