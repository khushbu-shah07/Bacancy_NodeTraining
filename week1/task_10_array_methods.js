/* eslint-disable no-console */
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

days.pop();
console.log(`After pop : ${days}`);

days.push('sunday');
console.log(`After push: ${days}`);

days.shift();
// console.log(shift)
console.log(`After shifting method: ${days}`);

days.unshift('monday');
console.log(`After unshift method: ${days}`);

const index = days.indexOf('thursday');
console.log(`Index of thursday is ${index}`);

// pop(): removes the last element from the array
// push(): adds one or more elements to the last
// shift(): removes the first element from an array and returns it.
// unshift(): adds one or more elements to the beginning of an array and returns the new length.
