/**
 * Int8Array, Uint8Array Uint8ClampedArray => have  size 1 in bytes
 * Int16Array, Uint16Array => have size 2 in bytes
 * Int32Array, Uint32Array, Float32Array => zise 4 in bytes
 * Float64Array => 8 in bytes
 */

var i8 = new Int16Array(3);
console.log(i8);
// Returns  {0:0, 1:0, 2:0}
console.log(Array.from(i8));
// Returns [0, 0, 0]

//to create a buffer, we need to assign how much data (in bytes) you
// want to the array to take up.
// NOTE: le number os bytes should be MULTIPLE OF BYTES LISTED ABOVE
let buffer = new ArrayBuffer(6);
let i8View = new Int16Array(8);
console.log(buffesr.byteLength); //=> 6
console.log(i8View.byteLength); //=> 6
console.log(i8View); //=> [0,0,0]

i8View[0] = 40;
console.log(i8View); //=> {0: 40,0:0,0:0}
console.log(Array.from(i8View)); //=> [40,0,0]

const buffer64 = new ArrayBuffer(64);
const i32View = new Int32Array(buffer64);
console.log(buffer64.byteLength); //=> 16
console.log(i32View.byteLength); //=> 16

//NOTE  a regular array  is somewhat a Stack that uses LIFO technics
// pop() to remove the top/last item and push() to add  item on top/last
