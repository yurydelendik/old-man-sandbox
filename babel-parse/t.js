var traverseAst = require('./traverse.js');
var fs = require('fs');

var code = fs.readFileSync('test.js').toString();
 
var count = 0;
var visitor = {
  enter(path) {
    count++;
  }
};

traverseAst(code, visitor);

console.log("count = " + count);
console.log('done');
