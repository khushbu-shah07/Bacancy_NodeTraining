// eslint-disable-next-line no-console
// console.log('test');

const arr = [2, 0, 3, 1, 8, 5, 6];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    // eslint-disable-next-line no-console
    console.log(
      `encountered a number greater than 5 (break conditon) : ${arr[i]}`,
    );
    break;
  } else if (arr[i] === 3) {
    // eslint-disable-next-line no-console
    console.log(`after continue conditon : ${arr[i]} skipped`);
    // eslint-disable-next-line no-continue
    continue;
  // eslint-disable-next-line no-console
  } else console.log(`${arr[i]}`);
}
