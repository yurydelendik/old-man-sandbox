
function sigmoid_js(x) {
  return 1 / (1 + Math.exp(-x));
}

let sigmoid_wasm;

function print(type, msg) {
  document.getElementById("term").textContent += `[${type}]\t${msg}\n`;
}

function test_wasm() {
  const start = performance.now();
  let sum = 0;
  for (let i = -16; i <= 16; i += 1e-5)
    sum += sigmoid_wasm(i) - 0.5;
  print("wasm", performance.now() - start);
  console.log("wasm", sum);
}

function test_js() {
  const start = performance.now();
  let sum = 0; 
  for (let i = -16; i <= 16; i += 1e-5)
    sum += sigmoid_js(i) - 0.5;
  print("js", performance.now() - start);
  console.log("wasm", sum);
}

function run() {
  test_js();   test_js();   test_js();   test_js();   test_js();   test_js();   test_js();
  test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm(); test_wasm();
}

async function start() {
  const file = await (await fetch('sigmoid.wasm')).arrayBuffer();
  const { instance } = await WebAssembly.instantiate(file, { Math, });
  sigmoid_wasm = instance.exports.sigmoid;

  run();
  setTimeout(run, 1000);
  setTimeout(run, 2000);
  setTimeout(run, 5000);
}
start();
