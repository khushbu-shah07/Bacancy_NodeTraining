/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */



// import { multiply } from './multiply.mjs';
// Both import and require can't be able to use together
// To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

const sum = require('./sum.cjs');

const resultSum = sum(12, 31);
console.log(`Sum : ${resultSum}`);

// const resultMultiply = multiply(2, 3);
// console.log(`Multiplication: ${resultMultiply}`);
