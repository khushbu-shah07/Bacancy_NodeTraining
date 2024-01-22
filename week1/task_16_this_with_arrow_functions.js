// Create a constructor function named Car that takes a brand parameter. Inside the constructor, create an object property carInfo with a nested method named displayInfo. The displayInfo method should use the "this" keyword to access both the brand property of the object and a parameter passed to the displayInfo method. Instantiate a Car object and call the displayInfo method.


// Constructor function
function Car(brand) {
this.brand = brand;
this.carInfo = {
    displayInfo :(color)=>{
        console.log(`Brand: ${this.brand}, Parameter passed color: ${color}`);
    }
};
//   this.carInfo = {
//     displayInfo(color) {
//         console.log(`Brand: ${this.brand}, Parameter passed color: ${color}`);
//     }
// };
}

const myCar = new Car("Toyota");
myCar.carInfo.displayInfo("red");
  
  
// using an arrow function for displayInfo can be beneficial in this context because arrow functions do not bind their own this.
//In this way, the this inside the arrow function still refers to the Car object, allowing it to access the brand property. If we use a regular function declaration, we might need to use additional techniques like binding to ensure that this refers to the correct context.
  
  
  
  
  
  
  
  