/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
let intervalId;
function to_start() {
  intervalId = setInterval(start, 1000);
}

function to_stop() {
  clearInterval(intervalId);
}

function start() {
  console.log('helloo!!');
}

// let intervalId;
// document.getElementById('start').addEventListener('click', () => {
//   intervalId = setInterval(startby, 1000);
// });
// function startby() {
//   console.log('Hello');
// }

// document.getElementById('stop').addEventListener('click', () => {
//   clearInterval(intervalId); // stop the interval
// });
