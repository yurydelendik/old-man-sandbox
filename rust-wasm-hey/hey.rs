use std::slice;
use std::str;
use std::mem;

extern "C" {
  fn print(text: *const u8, text_len: usize);
}

#[no_mangle]
pub extern "C" fn alloc_mem(size: usize) -> *mut u8 {
  let mut m = Vec::with_capacity(mem::size_of::<usize>() + size);
  unsafe {
    let p: *mut u8 = m.as_mut_ptr();
    *(p as *mut usize) = size;
    mem::forget(m);
    return p.offset(mem::size_of::<usize>() as isize);
  }
}

#[no_mangle]
pub extern "C" fn free_mem(p: *mut u8) {
  unsafe {
    let v = p.offset(-(mem::size_of::<usize>() as isize));
    let size = *(v as *mut usize);
    Vec::from_raw_parts(v, 0, size);
  }
}

#[no_mangle]
pub extern "C" fn hello(name: *const u8, name_len: usize) {
  let name_str = str::from_utf8(unsafe {
    slice::from_raw_parts(name, name_len)
  }).unwrap();
  let text = format!("Hey, {}!", name_str);
  let text_str = text.as_str();
  unsafe { 
    print(text_str.as_ptr(), text.len());
  }
}
