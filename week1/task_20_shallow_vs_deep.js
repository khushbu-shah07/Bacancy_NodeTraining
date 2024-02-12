/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
// Create an object called originalPerson with properties name, age, and an array hobbies. Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson and deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects the original object. Log the properties of all three objects.

let originalPerson = {
  name: 'khushbu',
  age: 22,
  hobbies: ['cooking', 'music', 'drawing'],
};

// shallow copy
let shallowCopyPerson = originalPerson;
shallowCopyPerson.hobbies[0] = 'badminton';

console.log('original', originalPerson);
console.log('shallow copy', shallowCopyPerson);



// deep copy
let deepCopyPerson = structuredClone(originalPerson);
deepCopyPerson.hobbies[2] = 'badminton';

console.log('deep copy--original', originalPerson);
console.log(deepCopyPerson);



// Object.assign and spread operator are also use to remove the limitation of shallow deep but they also do only partial deep copy.
