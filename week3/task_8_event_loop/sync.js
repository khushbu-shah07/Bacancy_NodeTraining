/* eslint-disable no-console */
// 1. this script should read file in sync and doing other operations with other timing functions & promises.
// 2. this script should read file in async and doing other operations with other timing functions & promises.

const fs = require('fs');

setTimeout(() => {
  console.log('Set timeout [3000ms]');
}, 3000);

setTimeout(() => {
  console.log('Set timeout [0ms]');
}, 0);

// const data = fs.readFileSync('./input.txt', 'utf-8',  (err) => {
//     console.log("Error occured: ",err);
// })
// console.log(data);

try {
  const data = fs.readFileSync('./input.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

setTimeout(() => {
  console.log('Set timeout [2000ms]');
}, 2000);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved [2000]');
  }, 2000);
});

promise.then((data) => {
  console.log(`Data from promise: ${data}`);
});

// setTimeout(()=>{
//     console.log("Set timeout [2000ms]");
// },2000)
