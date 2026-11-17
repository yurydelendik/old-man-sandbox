
# Build gcd.wasm

```
rustc --target=wasm32-unknown-unknown --crate-type=cdylib gcd.rs -g -o gcd.wasm --remap-path-prefix="`pwd`/=./"
python3 misc/wasm-section.py --string "gcd.wasm" sourceMappingURL >> gcd.wasm
```

