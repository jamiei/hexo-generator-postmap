# hexo-generator-postmap

Generates a locations.xml and page showing an interactive Google map embed with your posts/pages marked on the map with pop up links to your posts/pages.

This package is still pretty rough around the edges and is not recommended for anything important yet. Plenty of code cleanup and tests to be done. Suggestions, contributions, or bug reports gratefully received.

You should tag posts/pages by putting the lat and long in the location metadata at the top of your post file, for example:

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
  xml_path: 'locations.xml'
  map_page_stub: 'mapofposts'
  map_page_title: 'Map of posts'
  google_maps_api_key: 'API_KEY'
```

- **xml_path** - Path to your locations.xml document.
- **map_page_stub** - The url friendly name of your map page without slashes (eg mapofposts)
- **map_page_title** - The human friendly name of your map page, used as the hexo title of page.
- **google_maps_api_key** - Your API key for Google Maps [see instructions here](https://developers.google.com/maps/documentation/javascript/get-api-key).

You will also likely want to create a menu navigation link in your hexo site to your map page stub link.

## Changes

### 0.3
- Requires Google Maps API key.
- Updated date format of post date on map display.

### 0.2
- Added auto centre and zoom around the added location bounds.
