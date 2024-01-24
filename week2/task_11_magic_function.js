// Create function that in which you have to pass number in diff function call and when you want result at the end you have to call function with no argument.
// Ex. magicFunction(2)(3)(4)(5)()
// output: 14

// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }
// console.log(sum(1)(2)(3)(4)());

// function sum(a){
//     return function(b){
//         return b ? sum(a+b) : a;
//     } 
// }
// console.log(sum(1)(2)(3)(5)());

let sum = a => (b) => b ? sum(a+b) :a
console.log(sum(2)(3)(4)(5)());
