
// console.log(x);
// if (true) {
//     var x = 10;
//     console.log(x); // Output: 10
//   }
// console.log(x);


// diff example
// var myvar;
// console.log(myvar); // output : undefined
// myvar = 10;
// console.log(myvar); // output : 10


// Due to hoisting, it does not matter where we have declared the variables, the variable declarations move to the top of their scopes. In this example, we have printed the variable before its declaration, and it is not giving any error. It will give an undefined value until we initialize it.







// console.log(x);         // hoisting error
// eslint-disable-next-line no-constant-condition

if (true) {
  let x = 10;
  // eslint-disable-next-line no-console
  console.log(x); // Output: 10
}
// console.log(x);


// diff example
// console.log(myvar); // ReferenceError
// let myvar = 50;
// console.log(myvar); // output 50

// The variables declared with let are not hoisted to the top of the scope. So, if we try to access a variable before declaring it, it will surely give us a Reference Error. In this example, printing the variable before its declaration is giving us an error.