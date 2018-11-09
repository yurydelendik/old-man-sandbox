RUST_SRC ?= $(HOME)/Work/junk/rust-nightly
EMSCRIPTEN ?= $(HOME)/Work/emscripten
DWARFDUMP ?= $(HOME)/Work/llvmwasm/llvm-build/bin/llvm-dwarfdump
WASM_SOURCEMAP_CMD = $(EMSCRIPTEN)/tools/wasm-sourcemap.py \
  --dwarfdump=$(DWARFDUMP)
PUBLISH_URL ?= https://yurydelendik.github.io/old-man-sandbox/rust-wasm-hey/
RUST_DBG_PREFIX ?= /rustc/653da4fd006c97625247acd7e076d0782cdc149b

build: hey.wasm hey.wasm.map hey.dbg.wasm

hey.wasm:
	rustc +nightly --target=wasm32-unknown-unknown hey.rs -o hey.wasm --crate-type=cdylib -g

hey.wasm.map: hey.wasm
	$(WASM_SOURCEMAP_CMD) hey.wasm -w hey.prod.wasm -o hey.wasm.map \
	  -x -s --source-map-url=$(PUBLISH_URL)hey.wasm.map \
		-p `pwd`=. \
	  -l $(RUST_DBG_PREFIX)=$(RUST_SRC) \
	  --scope-info

hey.dbg.wasm: hey.wasm
	cat hey.wasm > hey.dbg.wasm
	./misc/wasm-section.py sourceMappingURL --string "hey.dbg.wasm" >> hey.dbg.wasm
	./misc/wasm-section.py sourceURLPrefixes -s -f ./misc/remappings.json >> hey.dbg.wasm

clean:
	-rm hey.wasm hey.wasm.map hey.prod.wasm hey.dbg.wasm

.PHONY: build clean
