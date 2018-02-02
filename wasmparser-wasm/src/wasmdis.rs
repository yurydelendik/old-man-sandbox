extern crate wasmparser;
extern crate wasmtext;

use std::slice;
use std::mem;
use wasmparser::{Parser, ParserState, WasmDecoder};
use wasmtext::Writer;

extern "C" {
    fn log(arg1: *const u8, len: u32);
}

#[no_mangle]
pub extern "C" fn alloc(size: usize) -> *mut u8 {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    mem::forget(buf);
    return ptr as *mut u8;
}

#[no_mangle]
pub extern "C" fn dealloc(ptr: *mut u8, cap: usize) {
    unsafe {
        let _buf = Vec::from_raw_parts(ptr, 0, cap);
    }
}

#[no_mangle]
pub fn parse(bytes: *const u8, len: u32) {
    let data = unsafe { slice::from_raw_parts(bytes, len as usize) };
    let mut tmp = Vec::new();
    {
        let mut writer = Writer::new(&mut tmp);

        let mut parser = Parser::new(data);
        loop {
            let state = parser.read();
            if let ParserState::Error(err) = *state {
                panic!("Unexpected error: {:?}", err);
            }
            writer.write(state).unwrap();
            if let ParserState::EndWasm = *state {
                break;
            }
        }

    }
    let y = tmp.as_slice();
    unsafe {
        log(y.as_ptr(), y.len() as u32);
    }
}
