var fs = require('fs');

var map = JSON.parse(fs.readFileSync('hey.wasm.map').toString());
var pathToRust = "/Users/yury/Work/rust";
map.sourcesContent = [];
for (var i = 0; i < map.sources.length; i++) {
  var path = map.sources[i];
  if (!path.startsWith('/checkout/')) {
    map.sourcesContent[i] = null;
    continue;
  }
  map.sources[i] = 'rust-src://' + path;
  if (!path.startsWith('/checkout/src/')) {
    map.sourcesContent[i] = "(unknown)";
    continue;
  }
  var content = fs.readFileSync(path.replace("/checkout", "/Users/yury/Work/rust")).toString();
  map.sourcesContent[i] = content;; 
}

fs.writeFileSync('hey.wasm.map', JSON.stringify(map));
