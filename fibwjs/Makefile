export WASMCEPTION=$(HOME)/Work/llvmwasm/inception
export EMSCRIPTEN=$(HOME)/Work/emscripten

build: fib2.js

fib2.wasm: fib2.c
	$(WASMCEPTION)/dist/bin/clang \
		--target=wasm32-unknown-unknown-wasm fib2.c \
		-g --sysroot=$(WASMCEPTION)/sysroot -o fib2.wasm \
		-Wl,--no-entry,--export=fib -nostdlib

fib2.wasm.map: fib2.wasm
	$(EMSCRIPTEN)/tools/wasm-sourcemap.py fib2.wasm -o fib2.wasm.map \
		--dwarfdump $(WASMCEPTION)/dist/bin/llvm-dwarfdump -s

fib2.esm: fib2.wasm fib2.wasm.map
	$(BINARYEN)/bin/wasm2js fib2.wasm -ism fib2.wasm.map \
		-o fib2.esm -osm fib2.esm.map -osu fib2.esm.map

fib2.js: fib2.esm
	./node_modules/.bin/babel \
		--plugins @babel/transform-modules-umd --presets @babel/preset-env \
		fib2.esm -o fib2.js -s --module-id fibMod

clean:
	-rm fib2.{js,esm,wasm} fib2.{js,esm,wasm}.map

.PHONY: build clean
