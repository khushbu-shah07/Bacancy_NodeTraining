// Create an object called book with properties title, author, and pages. Add a method called displayInfo to the object, which logs a message using the properties to display information about the book. Instantiate the object with sample values and call the displayInfo method.

let book = {
    title : "abc",
    author: "xyz",
    pages : "200",
    displayInfo () {
        console.log(`The book ${this.title} is written by ${this.author} is of total ${this.pages} pages`);
    }
};
book.displayInfo();