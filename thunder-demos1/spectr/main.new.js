/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SoundListener } from './soundlistener.js';
import { paintNextColumn } from './display.js';
import { DFT } from './dsp.js';
import * as Wasm from './wasm_dft.js';

const SAMPLE_RATE = 44100;
const BUFFER_SIZE = 1024;

const dft = new DFT(BUFFER_SIZE, SAMPLE_RATE);
const calc_spectrum_js = (buffer) => {
  dft.forward(buffer);
  return dft.spectrum;
};
const calc_spectrum_wasm = (buffer) => {
  Wasm.getData().set(buffer);
  Wasm.transform();
  return Wasm.getSpectrum();
};
const calc_spectrum = calc_spectrum_js;

let calc_time = 0;
let calc_count = 0;

const listener = new SoundListener(BUFFER_SIZE);
listener.onChunk = (chunk) => {
  const start = performance.now();
  const spectrum = calc_spectrum(chunk);
  calc_time += performance.now() - start;
  calc_count++;
  paintNextColumn(spectrum);
};

document.getElementById("start").setAttribute("disabled", "disabled");
Wasm.init(BUFFER_SIZE).then(() => {
  document.getElementById("start").removeAttribute("disabled");
});
document.getElementById("start").addEventListener("click", () => {
  listener.start();
});

setInterval(() => {
  const speed = calc_count * 1000 / calc_time;
  document.getElementById("speed").textContent = speed ? speed.toFixed(2) : "n/a";
  calc_time = 0;
  calc_count = 0;
}, 3000);