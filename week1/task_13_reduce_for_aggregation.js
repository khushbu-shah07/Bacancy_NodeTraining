//reduce (addition of elements of an array)
let oldarr = [1,2,3,4,5,6]
console.log(oldarr);
let newarr = oldarr.reduce((result,item) => {
    return result+item;
},0)

console.log(`Sum: ${newarr}`);