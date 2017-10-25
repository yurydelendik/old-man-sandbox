var babylon = require('babylon');
var traverse = require('babel-traverse').default;
var t = require('babel-types');

function _parse(code, opts) {
  return babylon.parse(
    code,
    Object.assign({}, opts, {
      sourceType: "module",
      plugins: ["jsx", "flow", "objectRestSpread"]
    })
  );
}

function traverseAst(code, visitor) {
console.time("parse");
  var ast = _parse(code);
console.timeEnd("parse");


console.time("traverse");
  traverse(ast, visitor);
console.timeEnd("traverse");

}


module.exports = traverseAst;
