let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

days.pop()
console.log(`After pop : ${days}`) 

days.push('sunday')
console.log(`After push: ${days}`)

days.shift()
// console.log(shift)
console.log(`After shifting method: ${days}`);

days.unshift('monday')
console.log(`After unshift method: ${days}`);

let index = days.indexOf('thursday')
console.log(`Index of thursday is ${index}`)
