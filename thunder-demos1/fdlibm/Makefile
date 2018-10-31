WASMCEPTION ?= $(HOME)/Work/wasmception

build: sigmoid.wasm

sigmoid.wasm: sigmoid.c
	$(WASMCEPTION)/dist/bin/clang sigmoid.c \
	  --target=wasm32-unknown-unknown-wasm \
	  --sysroot=$(WASMCEPTION)/sysroot \
	  -nostdlib -lc -Wl,-no-entry,--export=sigmoid \
	  -O3 -o sigmoid.wasm

clean:
	-rm sigmoid.wasm

.PHONY: build clean
