/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const ctx = document.getElementById("canvas").getContext("2d");
const column = ctx.createImageData(1, ctx.canvas.height);
for (let i = 3; i < column.data.length; i += 4) {
  column.data[i] = 255;
}
const clearColumn = ctx.getImageData(0, 0, 1, ctx.canvas.height);

let current_x = 0;

function getValueColor(val, data, j) {
  // expected value somewhere from 0.2 to 1e-8
  const h = -2 * 20 * Math.log10(val);
  const c = 255;
  const x = (c * (1 - Math.abs((h / 60) % 2 - 1)) | 0);
  data[j] = h < 60 || h >= 300 ? c : h < 120 || h > 240 ? x : 0;
  data[j + 1] = h >= 240 ? 0 : h >= 60 && h < 180 ? c : x;
  data[j + 2] = h < 120 ? 0 : h >= 180 && h < 300 ? c : x;
}

export function paintNextColumn(data) {
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
