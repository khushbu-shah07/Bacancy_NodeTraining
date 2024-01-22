// Create an object called student with properties name, age, and an array grades. Add a method named calculateAverage to the object, which calculates and returns the average of the grades. Iterate through the object properties using a loop and log each property and its value. Call the calculateAverage method and log the result.

let student = {
    name:'khushbu',
    age: 21,
    grades : [82,78,93,87,95],
    calculateAverage() {
        let sum = this.grades.reduce((total, currentValue) => total+currentValue,0)
        return sum/this.grades.length;
    }
}

for(let property in student){
    console.log(`${property} : ${student[property]} `)
}


console.log("Average of the grades : " + student.calculateAverage());