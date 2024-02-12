/* eslint-disable no-constant-condition */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable space-before-blocks */
/* eslint-disable no-var */
/* eslint-disable no-multiple-empty-lines */
// Write a JavaScript program with comments explaining the differences between let, var, and const in terms of variable declaration. Include examples that showcase the scope of each type of variable and any restrictions they might have.

// var - global scope
// let - block scope



// var

var iAmGlobal = 5;
// var iAmGlobal=7; // can be updated and redeclared
if (true) {
  var iamLocal = 10;
  // iAmGlobal = 3;
  // var iAmGlobal = 12;
  console.log(iAmGlobal);
  console.log(iamLocal);
}

console.log(iAmGlobal); // updated in the block
console.log(iamLocal);

// var is a global scoped variable
// var can be redeclared and updated within it's scope only.




// // let
// let iAmGlobal = 5;
// // iAmGlobal = 7; //updated
// // let iAmLocal = 44;

// if (true){
//   let iAmLocal = 10;
//   // let iAmGlobal = 3; // redeclared and can be accessed in the block only
//   iAmGlobal = 12; // updated
//   console.log(iAmGlobal);
//   console.log(iAmLocal);
// }

// console.log(iAmGlobal);
// // console.log(iAmLocal);


// If let is declared globally then it can be accessible from anywhere.
// If let is declared inside any block then it can only be accessible inside that block...and we can't access that variable outside the block.
// let can be updated and if it is updated in a block then that will update the value inside the block and outside the block also...
// let can be redeclared in the block only and that value can only be accessed inside the block only. But once the execution of that block ends, It will not be available outside of that block.
// If let will be updated then it will change it's values everywhere






// const
// const name = "Bac"
// let name = "Bash"    ///will throw an error bcuz it is already been declared
// name = "Bacancy" //will throw an error bcuz constant cannot be changed/updated

// var variables are initialized with undefined whereas let and const variables are not initialized
// const must be initialized during declaration unlike let and var
