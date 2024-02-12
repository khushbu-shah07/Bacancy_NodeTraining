/* eslint-disable func-names */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
// Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function

// function currying using closure
console.log('By using closure');
function multiply(x) {
  return function (y) {
    // console.log(x*y);
    return x * y;
  };
}

// let multiplyByTwo = multiply(2);
// // console.log(multiplyByTwo);
// multiplyByTwo(3);
console.log(multiply(3)(5));





// function currying using bind method

console.log('By bind method');
const multiply1 = function (a, b) {
  console.log(a * b);
};

const multiplyByTwo = multiply1.bind(this, 2);
// let multiplyByTwo = multiply1.bind(this,2,3);   //if we will write like this...then it will ignore the input 10 and will give output as 6.
multiplyByTwo(10);
