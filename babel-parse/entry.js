import * as traverseAst from './traverse.js';

fetch('test.js').then(req => req.text()).then(code => {
var count = 0;
var visitor = {
  enter(path) {
    count++;
  }
};

traverseAst(code, visitor);

console.log("count = " + count);
console.log('done');  
});
