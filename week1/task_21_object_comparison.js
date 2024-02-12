/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
// Create two objects user1 and user2 with similar properties. Write a function compareObjects that compares the properties of both objects. The function should log whether the objects are equal or not based on their properties. Test the function with user1 and user2

let user1 = {
  name: 'John',
  age: 21,
  height:34,
};

let user2 = {
  name: 'Harry',
  age: 24,
};

function compareObjects() {
  // for (const key in user1) {
  //   if (!user2.hasOwnProperty(key)) {
  //     console.log('The objects does not have similar properties');
  //     return;
  //   }
  // }
  // console.log('The objects have similar properties');

  for (const key in user2) {
    if (!user1.hasOwnProperty(key)) {
      console.log('The objects does not have similar properties');
    }
  }
  console.log('The objects have similar properties');
}

compareObjects();

// we can also use javaScript library Lodash and its _.isEqual() method to compare the objects.
