WASMCEPTION ?= $(HOME)/Work/wasmception

shuffle.wasm: shuffle.c
	$(WASMCEPTION)/dist/bin/clang --target=wasm32-unknown-unknown-wasm \
	 --sysroot=$(WASMCEPTION)/sysroot \
	 shuffle.c \
	 -Wl,--export=shuffle,--export=free,--export=malloc,--export=srand \
	 -Wl,-no-entry -lc \
	 -o shuffle.wasm -O2 -nostdlib

