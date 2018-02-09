const testWasmPath = "./test.wasm";
const wasmdisPath = "./wasmdis.wasm";
var wasmdis, memory;
var utf8Decoder = new TextDecoder('utf-8');
var imports = {
    env: {
        jslog: function (p, len) {
            var text = utf8Decoder.decode(new Uint8Array(memory.buffer, p, len));
            console.log(text);
            if (waitForJslog) {
                waitForJslog(text);
            }
        },
    }
};
var waitForJslog = null;

function disassemble(buffer) {
    const data = new Uint8Array(buffer);
    const { alloc, dealloc, parse } = wasmdis.exports;
    const p = alloc(data.length);
    new Uint8Array(memory.buffer, p, data.length).set(data);
    return new Promise(resolve => {
        waitForJslog = resolve;
        console.time("parse");
        parse(p, data.length);
    }).then(wast => {
        dealloc(p, data.length);
        return wast;
    }, reason => {
        console.error(reason);
        document.getElementById('file').setAttribute('disabled', 'disabled');
        return reason.toString();
    }).then(wastOrError => {
        console.timeEnd("parse");
        waitForJslog = null;
        document.getElementById("disasm").textContent = wastOrError;
    });
}

var wasmdisReady = WebAssembly.instantiateStreaming(fetch(wasmdisPath), imports)
    .then(({ instance, }) => {
        wasmdis = instance;
        memory = instance.exports.memory;
    });

wasmdisReady.then(() => {
    return fetch(testWasmPath).then(req => req.arrayBuffer())
        .then(buffer => disassemble(buffer));
});

function disassembleFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
        disassemble(reader.result);
    };
    reader.readAsArrayBuffer(file);
}

wasmdisReady.then(() => {
    const fileEl = document.getElementById('file');
    fileEl.removeAttribute('disabled');
    fileEl.addEventListener('change', () => {
        document.getElementById('default-hint').setAttribute('hidden', 'hidden');
        disassembleFile(fileEl.files[0]);
    });
});