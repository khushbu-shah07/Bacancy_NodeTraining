// Write a JavaScript program with comments explaining the differences between let, var, and const in terms of variable declaration. Include examples that showcase the scope of each type of variable and any restrictions they might have.

//var - global scope
//let - block scope



//var

var iAmGlobal=5;
// var iAmGlobal=7;
if(true){
    var iamLocal = 10;
    iAmGlobal = 3;
    console.log(iAmGlobal);  
    console.log(iamLocal);
}

console.log(iAmGlobal);   //updated in the block
console.log(iamLocal);

// var is a global scoped variable
// var can be redeclared and updated within it's scope.




//let
// let iAmGlobal=5;
// // iAmGlobal = 7;   //updated

// if(true){
//     let iAmLocal = 10;
//     //let iAmGlobal = 3;      //redeclared and can be accessed in the block onlyy
//     iAmGlobal = 12;        //updated 
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }

// console.log(iAmGlobal);
// // console.log(iAmLocal);


// If let is declared globally then it can be accessible from anywhere.
// If let is declared inside any block then it can only be accessible inside that block...and we can't access that variable outside the block.
// let can be updated but not redeclared.
// if let will be updated then it will change it's values everywhere





//const
// const name = "Bac"
// let name = "Bash"    ///will throw an error bcuz it is already been declared
//name = "Bacancy" //will throw an error bcuz constant cannot be changed





// var variables are initialized with undefined whereas let and const variables are not initialized
//const must be initialized during declaration unlike let and var


