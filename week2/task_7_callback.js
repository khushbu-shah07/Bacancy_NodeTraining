/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
// Create a function that takes an array and a callback function specifying the operation to be performed on each element of the array. The function should return a new modified array. (Don’t use map)

// const customMap = (arr, callback) => {
//   const modifiedArray = [];
//   // eslint-disable-next-line no-unused-vars
//   arr.forEach((item, index) => {
//     const res = callback(item);
//     modifiedArray.push(res);
//   });

//   return modifiedArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log('Original Array: ', numbers);

// const doubleValue = customMap(numbers, (number) => number * 2);
// console.log('Modified Array: ', doubleValue);



function arrOp(arr, callback) {
  const modifiedArray = [];
  arr.forEach((item, index) => {
    const res = callback(item);
    modifiedArray.push(res);
  });
  return modifiedArray;
}
function doubleValue(num) {
  return 2 * num;
}

const originalArray = [1, 2, 3, 4, 5];
console.log('Original Array: ', originalArray);

const modifiedArray = arrOp(originalArray, doubleValue);
console.log('Modified Array: ', modifiedArray);
