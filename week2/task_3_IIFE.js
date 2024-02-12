/* eslint-disable no-multiple-empty-lines */
/* eslint-disable func-names */
/* eslint-disable no-console */
// Create simple function that will run only once while we start program.

(function (name) {
  console.log(`My name is ${name}.`);
}('khushbu'));

// arrow function
((age) => {
  console.log(`My age is ${age}`);
})(21);

// const runOnce = (() => {
//     let hasRun = false;

//     return () => {
//         if (!hasRun) {
//             console.log("This function runs only once.");
//             hasRun = true;
//         }
//     };
// })();

// // The function will run only once when the program starts
// runOnce();


// An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. Also known as a self-executing anonymous function.
