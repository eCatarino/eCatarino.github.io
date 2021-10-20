/*
*  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

/* global main */

'use strict';

const leftVideo = document.getElementById('a-scene');
const rightVideo = document.getElementById('video');

leftVideo.addEventListener('canplay', () => {
  let stream;
  const fps = 0;
  if (leftVideo.captureStream) {
    stream = leftVideo.captureStream(fps);
  } else if (leftVideo.mozCaptureStream) {
    stream = leftVideo.mozCaptureStream(fps);
  } else {
    console.error('Stream capture is not supported');
    stream = null;
  }
  rightVideo.srcObject = stream;
});