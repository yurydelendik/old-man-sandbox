var fs = require('fs');

var map = JSON.parse(fs.readFileSync('./target/wasm32-unknown-unknown/release/deps/wasmdis.wasm.map').toString());
map.sourcesContent = [];
for (var i = 0; i < map.sources.length; i++) {
  var path = map.sources[i];
  map.sources[i] = 'rust-src://' + path;
  try {
  var content = fs.readFileSync(path).toString();
  map.sourcesContent[i] = content;; 
  }
  catch (e) {
  map.sourcesContent[i] = `// unknown ${path}`;
  }
}

fs.writeFileSync('./web/wasmdis.wasm.map', JSON.stringify(map));
