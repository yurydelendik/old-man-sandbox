default: web/wasmdis.wasm

web/wasmdis.wasm: src/wasmdis.rs
	RUSTC="/Users/yury/Work/rust/rust-wasm/build/x86_64-apple-darwin/stage2/bin/rustc" cargo build --release --target=wasm32-unknown-unknown
#	wasm-gc target/wasm32-unknown-unknown/release/wasmdis.wasm
	cp target/wasm32-unknown-unknown/release/wasmdis.wasm web/
	node update-map.js

.PHONY: default
