RUST_SRC ?= $(HOME)/Work/junk/rust-nightly
EMSCRIPTEN ?= $(HOME)/Work/emscripten
DWARFDUMP ?= $(HOME)/Work/llvmwasm/llvm-build/bin/llvm-dwarfdump
WASM_SOURCEMAP_CMD = $(EMSCRIPTEN)/tools/wasm-sourcemap.py \
  --dwarfdump=$(DWARFDUMP)
PUBLISH_URL ?= https://yurydelendik.github.io/old-man-sandbox/rust-wasm-hey/

build: hey.wasm hey.wasm.map

hey.wasm:
	rustc +nightly --target=wasm32-unknown-unknown hey.rs -o hey.wasm --crate-type=cdylib -g

hey.wasm.map: hey.wasm
	$(WASM_SOURCEMAP_CMD) hey.wasm -w hey.prod.wasm -o hey.wasm.map \
	  -x -s --source-map-url=$(PUBLISH_URL)hey.wasm.map \
	  -l /checkout/src/=$(RUST_SRC)/src/ libcore/=$(RUST_SRC)/src/libcore/ \
	    libstd/=$(RUST_SRC)/src/libstd/ rustc/dlmalloc_shim/../../dlmalloc/=$(RUST_SRC)/src/dlmalloc/ \
	    liballoc/=$(RUST_SRC)/src/liballoc/ libpanic_abort/=$(RUST_SRC)/src/dlmalloc/ \
	    liballoc/=$(RUST_SRC)/src/libpanic_abort/ \
	    rustc/compiler_builtins_shim/../../libcompiler_builtins/=$(RUST_SRC)/src/libcompiler_builtins/ \
	    --scope-info

clean:
	-rm hey.wasm hey.wasm.map hey.prod.wasm

.PHONY: build clean
