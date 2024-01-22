// let
// if(true){
//     let x = 10;
//     console.log(x);    // Output: 10
// }
// // console.log(x);     // ReferenceError: myVariable is not defined

// x cannot be used outside the blockscope.
// the variable x declared with "let" keyword has block-level scope, so the value inside the block is not accessible outside.

// var

// eslint-disable-next-line no-constant-condition
if (true) {
  // eslint-disable-next-line vars-on-top, no-var
  var x = 10;
  // eslint-disable-next-line no-console
  console.log(x); // Output: 10
}

// eslint-disable-next-line block-scoped-var, no-console
console.log(`X value outside the function ${x}`); // Output: 10
// eslint-disable-next-line block-scoped-var
if (x >= 10) {
  // eslint-disable-next-line block-scoped-var, no-console
  console.log(`x value in another function ${x}`); // Output: 10
}
// the variable x declared with "var" keyword has function scope and the value inside the block can still be accessed outside and in other function also.
