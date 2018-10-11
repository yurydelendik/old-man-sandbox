function log(...msg) {
  document.getElementById("log").textContent += msg.join('') + '\n';
}

function run(instance) {
  const {memory, shuffle, malloc, free, srand} = instance.exports;
  srand(Date.now());
  const input1 = new Int32Array([1,2,3,4]);
  const run = (input) => {
    let p = malloc(input.byteLength);
    new Int32Array(memory.buffer, p, input.length).set(input1);
    log("p = ", p);
    let res = shuffle(p, input.length);
    free(p);
    log("res =", res);
    const arr = new Int32Array(memory.buffer.slice(res, input.length));
    free(res);
    log("memory.buffer len = ", memory.buffer.byteLength);
    return Array.prototype.join.call(arr.subarray(100), ',');
  };

  log(run(new Int32Array([1,2,3,4])));
  const big = new Int32Array(20000);
  for (let i = 0; i < big.length; i++) big[i] = i;
  log(run(big));
  malloc(1000); // hold some memory
  log(run(new Int32Array([1,2,3,4])));
}

fetch('shuffle.wasm').then(req => req.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(({instance}) => run(instance));
