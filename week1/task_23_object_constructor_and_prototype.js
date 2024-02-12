/* eslint-disable no-multiple-empty-lines */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
// Create a constructor function called Person that takes name and age as parameters and assigns them as properties. Add a method greet to the prototype of the constructor, which logs a greeting message using the person's name. Instantiate two objects using the Person constructor and call the greet method on both.

function Person(name, age) {
  this.name = name,
  this.age = age,


  // Using a regular function for the prototype method ensures that the 'this' value is correctly bound to the instance of the object calling the method.
  Person.prototype.greet = function () {
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
  };



  // the arrow function inside the prototype will always refer to the this value of the global context. So as result, it will use the name and age properties from the global context, which are the last values assigned ('riya' and 22).
  // Person.prototype.greet = () => {
  //   console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
  // };
}

const p1 = new Person('khushbu', 21);
const p2 = new Person('riya', 22);

p1.greet();
p2.greet();




// The purpose of the prototype is to share properties and methods between objects that are created from the constructor function.
