/* eslint-disable no-console */
// - Learn about stream and it’s advantages
// - Create simple program that read and write data in file using stream

const fs = require('fs');

const readStream = fs.createReadStream('./input.txt', 'utf-8');
const writeStream = fs.createWriteStream('./output.txt');

readStream.on('data', (chunk) => {
  console.log('Data received in chunks', chunk);

  writeStream.write(chunk);
});
readStream.on('end', () => {
  console.log('End of data stream (read)');

  writeStream.end(() => {
    console.log('Writing of data stream ended');
  });
});
