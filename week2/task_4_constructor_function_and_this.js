/* eslint-disable no-console */
/* eslint-disable func-names */
// Create Car constructor function that takes parameters such as name, brand, and year. Include a method displayInfo that prints the car details. Create an instance using the constructor function and call the displayInfo method.

function Car(name, brand, year) {
  this.name = name;
  this.brand = brand;
  this.year = year;
  this.displayInfo = function () {
    console.log(`${this.name} of ${this.brand} was launched in ${this.year}`);
  };
}

const car1 = new Car('ModelX', 'Tesla', 2022);
car1.displayInfo();
