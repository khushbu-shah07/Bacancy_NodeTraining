/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */

// let
if (true) {
  let x = 10;
  console.log(x); // Output: 10
}
console.log(x); // ReferenceError: myVariable is not defined

// x cannot be used outside the blockscope.
// the variable x declared with "let" keyword has block-level scope, so the value inside the block is not accessible outside.

// var

// if (true) {
//   var x = 11;
//   console.log(x); // Output: 10
// }
// console.log(`X value outside the function ${x}`); // Output: 11

// if (x >= 10) {
//   console.log(`x value in another function ${x}`); // Output: 11
// }
// the variable x declared with "var" keyword has function scope and the value inside the block can still be accessed outside and in other function also.
