/* eslint-disable no-console */
// Create program of which required map, filter chaining, and after that replace that with reduce
// Ex.
// const students = [
// { name: 'jeel', age: 21 },
// { name: 'franklin', age: 25 },
// { name: 'vivek', age: 26 },
// { name: 'hardik', age: 23 },
// ]
// create array of name of student whose age is greater than 18

const students = [
  { name: 'jeel', age: 21 },
  { name: 'franklin', age: 25 },
  { name: 'vivek', age: 26 },
  { name: 'john', age: 16 },
  { name: 'hardik', age: 23 },
];

// Using map and filter chaining
const filteredNames = students
  .filter((student) => student.age > 18)
  .map((student) => student);
//   .map(student => student.name);

console.log('Using map and filter chaining:', filteredNames);

// Using reduce
const filteredNamesReduce = students.reduce((acc, student) => {
  if (student.age > 18) {
    acc.push(student.name);
  }
  return acc;
}, []);

console.log('Using reduce:', filteredNamesReduce);
