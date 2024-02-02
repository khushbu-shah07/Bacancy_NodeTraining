/* eslint-disable eol-last */
/* eslint-disable no-console */
console.log(process.argv);
const args = process.argv.slice(2);
console.log(`Hello, ${args.join(' ')}!`);
