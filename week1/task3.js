// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 3; i++) {
  // eslint-disable-next-line no-console
  console.log(`Outer loop i = ${i}`);
  // eslint-disable-next-line no-plusplus
  for (let j = 1; j <= 5; j++) {
    // eslint-disable-next-line no-console
    console.log(`Inner loop j = ${j}`);
    // eslint-disable-next-line eqeqeq
    if (i == j) {
      // eslint-disable-next-line no-console
      console.log(`Breaking the loop...${i} and ${j}`);
      break;
    }
  }
}
