/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */

// import moment from 'moment';
const moment = require('moment');

console.log(`Current Date And Time:  ${moment().format()}`); 

console.log(`Current Date: ${moment().format('DD-MM-YYYY')}`);
console.log(`Current Time: ${moment().format('hh:mm:ss')}`);
