# Building

```
rustup target add wasm32-unknown-emscripten
source ~/Work/emsdk_portable/emsdk_env.sh
rustc --target=wasm32-unknown-emscripten hey.rs -o hey.html -Clink-args="--source-map-base http://yurydelendik.github.io/old-man-sandbox/rust-wasm-hey/ -g4" -g
```
