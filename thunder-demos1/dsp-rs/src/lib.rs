use dft::{Operation, Plan};

extern crate dft;

struct Globals {
  data: Vec<f64>,
  spectrum: Vec<f64>,
  plan: Plan<f64>,
}

static mut GLOBALS: Option<Globals> = None;

#[no_mangle]
pub unsafe extern "C" fn init(size: usize) {
    GLOBALS = Some(Globals {
        data: vec![0.0; size],
        spectrum: vec![0.0; size / 2],
        plan: Plan::new(Operation::Forward, size),
    });
}

#[no_mangle]
pub unsafe extern "C" fn get_data() -> *mut f64 {
    GLOBALS.as_mut().expect("init").data.as_mut_ptr()
}

#[no_mangle]
pub unsafe extern "C" fn get_spectrum() -> *const f64 {
    GLOBALS.as_ref().expect("init").spectrum.as_ptr()
}

#[no_mangle]
pub unsafe extern "C" fn transform() {
    let Globals { ref mut data, ref plan, ref mut spectrum } = GLOBALS.as_mut().expect("init");
    dft::transform(data, plan);

    let b = 2.0 / data.len() as f64;
    let unpacked = dft::unpack(data);
    for i in 0..unpacked.len() / 2 {
        spectrum[i] = b * unpacked[i].norm();
    }    
}
