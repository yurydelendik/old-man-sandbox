# Building

```
rustup target add --toolchain=nightly wasm32-unknown-unknown

# build wasm and source map (see Makefile)
rustc +nightly --target=wasm32-unknown-unknown hey.rs -o hey.wasm --crate-type=cdylib -O -g
wasm-sourcemap.py hey.wasm -o hey.wasm.map

# or without map and debug info

rustc +nightly --target=wasm32-unknown-unknown hey.rs -o hey.wasm --crate-type=cdylib -O -Clink-args="--strip-debug"

```
