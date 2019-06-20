
# Build gcd.wasm

```
rustc +nightly --target=wasm32-unknown-unknown --crate-type=cdylib gcd.rs -g -o gcd.wasm --remap-path-prefix="`pwd`/=./"
misc/wasm-section.py --string "gcd.wasm" sourceMappingURL >> gcd.wasm
```

