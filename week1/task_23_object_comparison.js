// Create a constructor function called Person that takes name and age as parameters and assigns them as properties. Add a method greet to the prototype of the constructor, which logs a greeting message using the person's name. Instantiate two objects using the Person constructor and call the greet method on both.

function Person(name, age ){
    this.name=name,
    this.age=age,
    Person.prototype.greet = function() {
        console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
    }
}

let p1 = new Person('khushbu',21)
let p2 = new Person('riya',22)

p1.greet();
p2.greet();
