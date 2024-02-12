/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const arr = [2, 0, 3, 1, 8, 5, 6];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    console.log(
      `encountered a number greater than 5 (break conditon) : ${arr[i]}`,
    );
    break;
  } else if (arr[i] === 3) {
    console.log(`after continue conditon : ${arr[i]} skipped`);
    continue;
  } else console.log(`${arr[i]}`);
}
