/* eslint-disable no-console */
// constant

// Constants declaration
const PI = 3.14;
const MAX_VALUE = 100;

// Attempt to reassign values
// PI = 3.14159;  // Error: Assignment to constant variable
// MAX_VALUE = 200;  // Error: Assignment to constant variable

console.log('PI:', PI);
console.log('MAX_VALUE:', MAX_VALUE);

// Concept of Immutability with const:
// Constants declared with const are immutable, meaning their values cannot be changed or reassigned.
// It is appropriate to use const when you have values that should remain constant throughout the program.
// Constants are useful for expressing intent, enhancing code readability, and avoiding accidental changes.

// When to use const:
// Use const for values that should not be re-assigned.
// Use const for values that represent fixed quantities, like mathematical constants.
// Use const for values that should remain unchanged to prevent bugs and improve code maintainability.

// Example use case: Mathematical calculations
const radius = 5;
const circumference = 2 * PI * radius;

console.log('Circumference with radius 5:', circumference);
