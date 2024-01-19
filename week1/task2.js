const stringsArray = ['apple', 'banana', 'orange', 'strawberry', 'mango'];
let index = 0;

while (index < stringsArray.length && stringsArray[index].length <= 8) {
  // eslint-disable-next-line no-loop-func
  stringsArray.forEach((str, i) => {
    if (i === index) {
      // eslint-disable-next-line no-console
      console.log(`${str}!`);
    }
  });
  // eslint-disable-next-line no-plusplus
  index++;
}

// while — the code block is run once, and then the condition is evaluated.If the condition is valid, the sentence will be repeated until the condition becomes false
// foreach — for each element in an array, loops through a block of code
