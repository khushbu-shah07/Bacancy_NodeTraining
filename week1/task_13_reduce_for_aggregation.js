/* eslint-disable no-console */
// reduce (addition of elements of an array)
const oldarr = [1, 2, 3, 4, 5, 6];
console.log(oldarr);
const newarr = oldarr.reduce((result, item) => result + item, 0);
console.log(`Sum: ${newarr}`);
