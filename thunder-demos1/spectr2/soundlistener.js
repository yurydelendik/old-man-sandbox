/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const DEFAULT_SAMPLES_PER_CHUNK = 4096;
let audioCtx = null;

function getUserMedia(constraints) {
  if ('mediaDevices' in navigator)
    return navigator.mediaDevices.getUserMedia(constraints);

  let getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if (!getUserMedia)
    return Promise.reject(new Error("getUserMedia is not supported"));
  return new Promise(function (resolve, reject) {
    getUserMedia.call(navigator, constraints, resolve, reject);
  });
}

function stopStream(stream) {
  if ('getTracks' in stream) {
    stream.getTracks().forEach(function (t) { t.stop(); });
  } else {
    stream.stop();
  }
}

export class SoundListener {
  constructor(samplePerChunk = DEFAULT_SAMPLES_PER_CHUNK) {
    this.samplePerChunk = samplePerChunk;
    this.onChunk = null;
    this._scriptNode = null;
    this._sourceNode = null;
    this.isRecording = false;
    this._recordingFrom = null;
  }

  _scriptNode_onaudioprocess(evt) {
    const inputBuffer = evt.inputBuffer;
    for (let channel = 0; channel < inputBuffer.numberOfChannels; channel++) {
      const inputData = inputBuffer.getChannelData(channel);
      this.onChunk && this.onChunk(inputData);
    }
  }

  _startRecording(stream) {
    this.isRecording = true;
    this._recordingFrom = stream;
    this._sourceNode = audioCtx.createMediaStreamSource(stream);
    this._sourceNode.connect(this._scriptNode);
    this._scriptNode.connect(audioCtx.destination);
  }

  _stopRecording(stream) {
    stopStream(stream);
    this._scriptNode.disconnect(audioCtx.destination);
    this._sourceNode.disconnect(this._scriptNode);
    this._sourceNode = null;
    this._recordingFrom = null;
    this.isRecording = false;
  }

  stop() {
    this._stopRecording(this._recordingFrom);
  }

  async start() {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    this._scriptNode = audioCtx.createScriptProcessor(this.samplePerChunk, 1, 1);
    this._scriptNode.onaudioprocess = (evt) => this._scriptNode_onaudioprocess(evt);

    const stream = await getUserMedia({ audio: true });
    this._startRecording(stream);
  }
}
