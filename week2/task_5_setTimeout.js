// Create simple program that will print 1 to n at the interval of 1 second using setTimeout

//setTimeout allows us to run a function once after the interval of time.

function printNum(n){
    let currNum=1;

    function printNextNum(){
        console.log(currNum);

        if(currNum<n){
            currNum++;
            setTimeout(printNextNum,1000);
        }
    }
    printNextNum();

}


printNum(7);