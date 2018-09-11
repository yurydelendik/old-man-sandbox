(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("fibMod", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.fibMod = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.fib = _exports.memory = void 0;

  function asmFunc(global, env, buffer) {
    "almost asm";

    var HEAP8 = new global.Int8Array(buffer);
    var HEAP16 = new global.Int16Array(buffer);
    var HEAP32 = new global.Int32Array(buffer);
    var HEAPU8 = new global.Uint8Array(buffer);
    var HEAPU16 = new global.Uint16Array(buffer);
    var HEAPU32 = new global.Uint32Array(buffer);
    var HEAPF32 = new global.Float32Array(buffer);
    var HEAPF64 = new global.Float64Array(buffer);
    var Math_imul = global.Math.imul;
    var Math_fround = global.Math.fround;
    var Math_abs = global.Math.abs;
    var Math_clz32 = global.Math.clz32;
    var Math_min = global.Math.min;
    var Math_max = global.Math.max;
    var Math_floor = global.Math.floor;
    var Math_ceil = global.Math.ceil;
    var Math_sqrt = global.Math.sqrt;
    var abort = env.abort;
    var nan = global.NaN;
    var infinity = global.Infinity;
    var global$0 = 66560;
    var global$1 = 66560;
    var global$2 = 1024;
    var i64toi32_i32$HIGH_BITS = 0;

    function __wasm_call_ctors() {}

    function fib(var$0) {
      var$0 = var$0 | 0;
      var var$3 = 0,
          var$4 = 0,
          wasm2js_i32$0 = 0,
          wasm2js_i32$1 = 0;
      var$3 = global$0 - 32 | 0;
      var$4 = 0;
      wasm2js_i32$0 = var$3;
      wasm2js_i32$1 = var$0;
      HEAP32[(wasm2js_i32$0 + 28 | 0) >> 2] = wasm2js_i32$1;
      wasm2js_i32$0 = var$3;
      wasm2js_i32$1 = var$4;
      HEAP32[(wasm2js_i32$0 + 16 | 0) >> 2] = wasm2js_i32$1;
      wasm2js_i32$0 = var$3;
      wasm2js_i32$1 = 1;
      HEAP32[(wasm2js_i32$0 + 12 | 0) >> 2] = wasm2js_i32$1;
      wasm2js_i32$0 = var$3;
      wasm2js_i32$1 = var$4;
      HEAP32[(wasm2js_i32$0 + 24 | 0) >> 2] = wasm2js_i32$1;

      label$1: {
        label$2: do {
          if (((HEAPU32[(var$3 + 24 | 0) >> 2] | 0 | 0) < (HEAPU32[(var$3 + 28 | 0) >> 2] | 0 | 0) | 0) == (0 | 0)) break label$1;
          wasm2js_i32$0 = var$3;
          wasm2js_i32$1 = HEAPU32[(var$3 + 16 | 0) >> 2] | 0;
          HEAP32[(wasm2js_i32$0 + 20 | 0) >> 2] = wasm2js_i32$1;
          wasm2js_i32$0 = var$3;
          wasm2js_i32$1 = HEAPU32[(var$3 + 12 | 0) >> 2] | 0;
          HEAP32[(wasm2js_i32$0 + 16 | 0) >> 2] = wasm2js_i32$1;
          wasm2js_i32$0 = var$3;
          wasm2js_i32$1 = (HEAPU32[(var$3 + 12 | 0) >> 2] | 0) + (HEAPU32[(var$3 + 20 | 0) >> 2] | 0) | 0;
          HEAP32[(wasm2js_i32$0 + 12 | 0) >> 2] = wasm2js_i32$1;
          wasm2js_i32$0 = var$3;
          wasm2js_i32$1 = (HEAPU32[(var$3 + 24 | 0) >> 2] | 0) + 1 | 0;
          HEAP32[(wasm2js_i32$0 + 24 | 0) >> 2] = wasm2js_i32$1;
          continue label$2;
          break label$2;
        } while (1);
      }

      ;
      return HEAPU32[(var$3 + 12 | 0) >> 2] | 0 | 0;
    }

    function __wasm_grow_memory(pagesToAdd) {
      pagesToAdd = pagesToAdd | 0;
      var oldPages = __wasm_current_memory() | 0;
      var newPages = oldPages + pagesToAdd | 0;

      if (oldPages < newPages && newPages < 65535) {
        var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
        var newHEAP8 = new global.Int8Array(newBuffer);
        newHEAP8.set(HEAP8);
        HEAP8 = newHEAP8;
        HEAP16 = new global.Int16Array(newBuffer);
        HEAP32 = new global.Int32Array(newBuffer);
        HEAPU8 = new global.Uint8Array(newBuffer);
        HEAPU16 = new global.Uint16Array(newBuffer);
        HEAPU32 = new global.Uint32Array(newBuffer);
        HEAPF32 = new global.Float32Array(newBuffer);
        HEAPF64 = new global.Float64Array(newBuffer);
        buffer = newBuffer;
      }

      return oldPages;
    }

    function __wasm_current_memory() {
      return buffer.byteLength / 65536 | 0;
    }

    return {
      memory: Object.create(Object.prototype, {
        grow: {
          value: __wasm_grow_memory
        },
        buffer: {
          get: function get() {
            return buffer;
          }
        }
      }),
      fib: fib
    };
  }

  var memasmFunc = new ArrayBuffer(131072);
  var retasmFunc = asmFunc({
    Math: Math,
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array,
    NaN: NaN,
    Infinity: Infinity
  }, {
    abort: function abort() {
      throw new Error('abort');
    }
  }, memasmFunc);
  var memory = retasmFunc.memory;
  _exports.memory = memory;
  var fib = retasmFunc.fib;
  _exports.fib = fib;
});

//# sourceMappingURL=fib2.js.map