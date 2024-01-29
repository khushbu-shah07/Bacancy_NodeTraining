// Create a function that takes an array and a callback function specifying the operation to be performed on each element of the array. The function should return a new modified array. (Don’t use map)

const customMap = (arr, callback) => {
  const modifiedArray = [];
  // eslint-disable-next-line no-unused-vars
  arr.forEach((item, index) => {
    const res = callback(item);
    modifiedArray.push(res);
  });

  return modifiedArray;
};

const numbers = [1, 2, 3, 4, 5];
// eslint-disable-next-line no-console
console.log('Original Array: ', numbers);
const doubleValue = customMap(numbers, (number) => number * 2);

// eslint-disable-next-line no-console
console.log('Modified Array: ', doubleValue);

// function arrOp(arr, callback) {
//     let modifiedArray = [];
//     arr.forEach((item, index) => {
//         const res = callback(item)
//         modifiedArray.push(res);
//     });
//     return modifiedArray;
// }
// function doubleValue(num) {
//     return 2 * num;
// }

// let originalArray = [1, 2, 3, 4, 5];
// console.log('Original Array: ', originalArray);

// let modifiedArray = arrOp(originalArray, doubleValue);
// console.log('Modified Array: ', modifiedArray)
