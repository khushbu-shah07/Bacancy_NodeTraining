/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
// Create a document outlining best practices for variable declaration in modern JavaScript. Include guidelines on when to use let, var, or const, taking into consideration block scoping, hoisting, and the immutability of constants. Provide code examples to illustrate each best practice.

// var - global scope
// let and const - block scope

// declaration

// variables declared outside the block
var a = 5;
let b = 5;
const c = 5;

// inside the block

if (true) {
  console.log('Values inside block');
  var a = 10;
  console.log(a);
  let b = 10;
  console.log(b);
  const c = 10;
  console.log(c);
}

// outside the block
// here the value a will be changed but b and c will still be having the same value
console.log('Values outside block');
console.log(a);
console.log(b);
console.log(c);

// var is a global scoped variable
// var can be redeclared and updated within it's scope.





// Hoisting


// only var can be used before declaration (though it will give undefined value);
// The variables declared with let are not hoisted to the top of the scope. So, if we try to access a variable before declaring it, it will surely give us a Reference Error.
// console.log(`My name is ${name}`);
// var name = 'Khushbu';

// // console.log(`My name is ${name1}`);   //reference error
// const name1= 'Khushbu';

// // console.log(`My name is ${name2}`);   //reference error
// const name2= 'Khushbu';





// Immutability

// we use const whenever we want value to be fixed 
// const val = 'Bac';
// // val = 'Bash'   // this will throw an error bcuz variable declared using const can't be changed


// // we use var or let whenever we want the variable value to be able to change further in the program
// // let age = 21
// // age = 25
// // console.log(age);


// var age = 21
// age = 25;
// console.log(age);



// var variables are initialized with undefined whereas let and const variables are not initialized
// const must be initialized during declaration unlike let and var


