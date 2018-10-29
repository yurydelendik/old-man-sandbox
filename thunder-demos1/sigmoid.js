
function sigmoid_js(x) {
  return 1 / (1 + Math.exp(-x));
}

let sigmoid_wasm;

function test_wasm() {
  const start = performance.now();
  let sum = 0;
  for (let i = -1000000; i <= 1000000; i++)
    sum += sigmoid_wasm(i) - 0.5;
  console.log("wasm", sum, performance.now() - start);
}

function test_js() {
  const start = performance.now();
  let sum = 0; 
  for (let i = -1000000; i <= 1000000; i++)
    sum += sigmoid_js(i) - 0.5;
  console.log("js", sum, performance.now() - start);
}

function run() {
  test_js(); test_js(); test_js();test_js(); test_js(); test_js(); test_js();
  test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm();
}

async function start() {
  const file = await (await fetch('sigmoid.wasm')).arrayBuffer();
  const { instance } = await WebAssembly.instantiate(file, { Math, });
  sigmoid_wasm = instance.exports.sigmoid;

  run();
  setTimeout(run, 1000);
  setTimeout(run, 2000);
  setTimeout(run, 10000);
}
start();
