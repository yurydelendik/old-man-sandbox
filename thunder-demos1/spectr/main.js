import { SoundListener } from './soundlistener.js';
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

const ctx = document.getElementById("canvas").getContext("2d");
const column = ctx.createImageData(1, ctx.canvas.height);
for (let i = 3; i < column.data.length; i += 4) {
  column.data[i] = 255;
}
const clearColumn = ctx.getImageData(0, 0, 1, ctx.canvas.height);

const getValueColor = (val, data, j) => {
  // expected value somewhere from 0.2 to 1e-8
  const h = -2 * 20 * Math.log10(val);
  const c = 255;
  const x = (c * (1 - Math.abs((h / 60) % 2 - 1)) | 0);
  data[j] = h < 60 || h >= 300 ? c : h < 120 || h > 240 ? x : 0;
  data[j + 1] = h >= 240 ? 0 : h >= 60 && h < 180 ? c : x;
  data[j + 2] = h < 120 ? 0 : h >= 180 && h < 300 ? c : x;
};

let current_x = 0;
function paintNextColumn(data) {
  const len = Math.min(column.height, data.length);
  for (let i = 0, j = 0; i < len; i++) {
    getValueColor(data[i], column.data, j);
    j += 4;
  }
  ctx.putImageData(column, current_x, 0);
  ++current_x;
  if (current_x >= ctx.canvas.width) {
    current_x = 0;
  }
  ctx.putImageData(clearColumn, current_x, 0);
}

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

Wasm.init(BUFFER_SIZE).then(() => {
  document.getElementById("start").removeAttribute("disabled");
});
document.getElementById("start").addEventListener("click", () => {
  listener.start();
});

setInterval(() => {
  document.getElementById("t").textContent = (calc_count * 1000 / calc_time).toFixed(2);
  calc_time = 0;
  calc_count = 0;
}, 3000);