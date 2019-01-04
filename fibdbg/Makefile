CLANG=$(HOME)/Work/llvmwasm/llvm-build/bin/clang --target=wasm32-unknown-unknown-wasm
WASM_SECT=../rust-wasm-hey/misc/wasm-section.py
DWARF_JSON=node $(HOME)/Work/dwarf-to-json/pkg/cli.js

build: fib2_o0.wasm fib2_o2.wasm

fib2_o0.wasm: fib2.c
	$(CLANG) fib2.c -Wl,--no-entry,--export=fib -nostdlib -O0 -g -o fib2_o0.wasm -fdebug-prefix-map=`pwd`=.
	$(DWARF_JSON) fib2_o0.wasm fib2_o0.map
	$(WASM_SECT) --string "./fib2_o0.map" sourceMappingURL >> fib2_o0.wasm

fib2_o2.wasm: fib2.c
	$(CLANG) fib2.c -Wl,--no-entry,--export=fib -nostdlib -O2 -g -o fib2_o2.wasm -fdebug-prefix-map=`pwd`=.
	$(DWARF_JSON) fib2_o2.wasm fib2_o2.map
	$(WASM_SECT) --string "./fib2_o2.map" sourceMappingURL >> fib2_o2.wasm

clean:
	-rm fib2*.wasm fib2*.map

.PHONY: build clean

