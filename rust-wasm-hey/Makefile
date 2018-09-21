RUST_SRC ?= $(HOME)/Work/junk/rust-nightly
EMSCRIPTEN ?= $(HOME)/Work/emscripten
DWARFDUMP ?= $(HOME)/Work/llvmwasm/llvm-build/bin/llvm-dwarfdump
WASM_SOURCEMAP_CMD = $(EMSCRIPTEN)/tools/wasm-sourcemap.py \
  --dwarfdump=$(DWARFDUMP)
PUBLISH_URL ?= https://yurydelendik.github.io/old-man-sandbox/rust-wasm-hey/
RUST_DBG_PREFIX ?= /rustc/20dc0c50704ba1fc8c56a88ae2bf05ddb3e419bc

build: hey.wasm hey.wasm.map hey.dbg.wasm

hey.wasm:
	rustc +nightly --target=wasm32-unknown-unknown hey.rs -o hey.wasm --crate-type=cdylib -g

hey.wasm.map: hey.wasm
	$(WASM_SOURCEMAP_CMD) hey.wasm -w hey.prod.wasm -o hey.wasm.map \
	  -x -s --source-map-url=$(PUBLISH_URL)hey.wasm.map \
		-p `pwd`/lib=$(RUST_DBG_PREFIX)/src/lib \
		  lib=$(RUST_DBG_PREFIX)/src/lib \
		  rustc=$(RUST_DBG_PREFIX)/src/rustc \
		  `pwd`=.. \
	  -l $(RUST_DBG_PREFIX)=$(RUST_SRC) \
		  `pwd`/lib=$(RUST_SRC)/src/lib \
		  lib=$(RUST_SRC)/src/lib \
		  rustc=$(RUST_SRC)/src/rustc \
	  --scope-info

hey.dbg.wasm: hey.wasm
	cat hey.wasm > hey.dbg.wasm
	./misc/wasm-section.py sourceMappingURL --string "hey.dbg.wasm" >> hey.dbg.wasm
	./misc/wasm-section.py sourceURLPrefixes -s -f ./misc/remappings.json >> hey.dbg.wasm

clean:
	-rm hey.wasm hey.wasm.map hey.prod.wasm hey.dbg.wasm

.PHONY: build clean
