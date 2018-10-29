default:

spectr/dsp_rs.wasm: dsp-rs/target/wasm32-unknown-unknown/release/dsp_rs.wasm
	cp dsp-rs/target/wasm32-unknown-unknown/release/dsp_rs.wasm spectr/dsp_rs.wasm

dsp-rs/target/wasm32-unknown-unknown/release/dsp_rs.wasm:
	cd dsp-rs; cargo build --release

.PHONY: default
