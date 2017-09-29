var memory;
var env = {
  sys: {
    print(ptr) {
      let p = ptr;
      while (memory[p]) p++;
      let s = String.fromCharCode(...memory.subarray(ptr, p));
      console.log(s);
    }
  }
};

fetch('helloworld2.wasm')
  .then(req => req.arrayBuffer())
  .then(buf => WebAssembly.instantiate(buf, env))
  .then(({instance}) => {
    memory = new Uint8Array(instance.exports.memory.buffer);
    instance.exports.main();
  });

