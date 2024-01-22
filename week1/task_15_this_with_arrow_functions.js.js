// Define an object called calculator with properties x and y. Add a method named calculate to the object, which takes an operation string ("add", "subtract", "multiply", "divide") and uses an arrow function to perform the corresponding operation on x and y. Inside the arrow function, use the "this" keyword to access the object properties. Test the calculator with different operations.

let calculator = {
    x : 10,
    y : 5,
    calculate (operation){   
        switch(operation){
            case "add":
                return () => this.x + this.y;
            case "subtract":
                return () => this.x - this.y;
            case "multiply":
                return () => this.x * this.y
            case "divide":
                return () => this.x / this.y
        }
    }
};
console.log(calculator.calculate('add')());
console.log(calculator.calculate('subtract')());
console.log(calculator.calculate('multiply')());
console.log(calculator.calculate('divide')());