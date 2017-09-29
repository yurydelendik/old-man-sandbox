var sourceMap = require('source-map');
var fs = require('fs');

var count = 30000;
var output = "f30k.js";
var outputMap = output + ".map"
var generator = new sourceMap.SourceMapGenerator({
    file: output,
});
var content = '';

function addEntry(index) {
    var generatedStart = content.length;
    content += '0;';
    if (index == 42) content += 'debugger;'
    var generatedEnd = content.length;
    var file = '// test' + index + '\n(' + index + ' && 0);\n';
    var filename = "file" + index + ".js";
    generator.addMapping({
        source: filename,
        original: {line:2, column: 0},
        generated: {line:1, column:generatedStart},
    })
    generator.addMapping({
        source: filename,
        original: {line:3, column: 0},
        generated: {line:1, column:generatedEnd},
    })
    generator.setSourceContent(filename, file);
}

for (var i = 1; i <= count; i++) {
  addEntry(i);
}

content += '\n//# sourceMappingURL=' + outputMap;
fs.writeFileSync(output, content);
fs.writeFileSync(outputMap, generator.toString());
