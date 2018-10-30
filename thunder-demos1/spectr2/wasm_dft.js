/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let memory;
let data_ptr;
let spectrum_ptr;

export let transform;
export let size;

const wasmLocation = "./dsp_rs.wasm";

export async function init(size_) {
  size = size_;

  const file = await (await fetch(wasmLocation)).arrayBuffer();
  const { instance, } = await WebAssembly.instantiate(file);
  // const request = fetch(wasmLocation);
  // const { instance, } = await WebAssembly.instantiateStreaming(request);

  instance.exports.init(size);

  data_ptr = instance.exports.get_data();
  spectrum_ptr = instance.exports.get_spectrum();
  memory = instance.exports.memory;
  transform = instance.exports.transform;
}

export function getData() {
  return new Float64Array(memory.buffer, data_ptr, size);
}

export function getSpectrum() {
  return new Float64Array(memory.buffer, spectrum_ptr, size / 2);
}

