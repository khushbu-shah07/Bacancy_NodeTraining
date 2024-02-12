/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
// Create an object called person with properties name and age. Add a method named introduce to the object, which logs a message using the "this" keyword to reference the name and age properties. Call the introduce method to introduce the person.

let obj = {
  name: 'John',
  age: 22,
  introduce() {
    console.log(this.name);
    console.log(this.age);
    console.log(this);
  },
};

obj.introduce();





// let obj = {
//   name: 'John',
//   age: 22,
//   introduce: () => {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this);
//   },
// };

// obj.introduce();

// output:
// undefined
// undefined
// {}
