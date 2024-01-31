/* eslint-disable keyword-spacing */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
if (process.argv.length !== 5) {
  console.log('Usage: node filename.js <number1> <number2> <operation>');
} else {
  const number1 = parseFloat(process.argv[2]);
  const number2 = parseFloat(process.argv[3]);
  const operation = process.argv[4].toLowerCase();

  if(isNaN(number1) || isNaN(number2)) {
    console.error('Error: Both the arguments should be numeric');
  } else {
    switch (operation) {
    case 'add':
      console.log('Addition: ', number1 + number2);
      break;
    case 'subtract':
      console.log('Subtraction: ', number1 - number2);
      break;
    case 'multiply':
      console.log('Multiplication : ', number1 * number2);
      break;
    case 'divide':
      if (number2 === 0) {
        console.log('Error: division by zero is not possible');
      } else {
        console.log('Division: ', number1 / number2);
      }
      break;
    default:
      console.error('Error: Unsupported Operation');
      break;
    }
  }
}
