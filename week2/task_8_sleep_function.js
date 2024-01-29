// Create sleep function which can stop for loop for given amount of time

// By making normal function
// function sleep(time){
//     return new Promise(resolve => setTimeout(resolve,time))
// }

// async function sleepfunc(){
//     for(let i=0; i<5 ; i++){
//         console.log(i);
//         await sleep(2000);
//     }
// }
// sleepfunc();


// By making arrow function
// const sleep = (time) =>{
//     return new Promise((resolve) => setTimeout(resolve, time));
// };

// const sleepfunc = async () => {
//       for(let i=0; i<5 ; i++){
//         console.log(i);
//         await sleep(2000);
//     }
// }

// sleepfunc();



const sleep = async () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    console.log(i);
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000)
    })
  }
}

sleep();



// Added the condition to reject the promise
// const sleep = async () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);

//         if (i === 3) {
//             await new Promise((resolve, reject) => {
//                 setTimeout(() => reject("Promise rejected"), 2000);
//             });
//         } else {
//             await new Promise((resolve) => {
//                 setTimeout(resolve, 2000);
//             });
//         }
//     }
// };

// sleep().catch((error) => console.error("Error:", error));
