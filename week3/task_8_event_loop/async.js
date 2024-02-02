/* eslint-disable no-console */
const fs = require('fs');

setTimeout(() => {
  console.log('Set timeout [3000ms]');
}, 3000);

setTimeout(() => {
  console.log('Set timeout [0ms]');
}, 0);

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error Occrured: ', err);
  } else {
    console.log(data);
  }
});

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
