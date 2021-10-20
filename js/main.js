/*
*  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

/* global main */

'use strict';

// Call main() in demo.js
main();

const ascene = document.querySelector('a-scene');
const video = document.querySelector('video');

const stream = ascene.captureStream();
video.srcObject = stream;