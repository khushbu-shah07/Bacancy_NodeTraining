// Create simple function that will run only once while we start program.

// normal function
(function(name){
    console.log(`My name is ${name}.`)
})('khushbu')


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
