// let intervalId;
// function to_start(){
//     intervalId = setInterval(start,1000)
// }

// function to_stop() {
//         clearInterval(intervalId);
//     }

//     function start(){
//         console.log("helloo!!")
//     }


let intervalId;
document.getElementById("start").addEventListener('click', function () {
    intervalId = setInterval(startby, 1000);
});
function startby() {
    console.log("Hello");
}

document.getElementById("stop").addEventListener('click', function () {
    clearInterval(intervalId);  // stop the interval
})