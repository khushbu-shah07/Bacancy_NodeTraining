/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop i = ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Inner loop j = ${j}`);
    if (i == j) {
      console.log(`Breaking the loop...${i} and ${j}`);
      break;
    }
  }
}
