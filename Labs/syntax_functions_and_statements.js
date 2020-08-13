


//Exercise 1:
function calculateLenghts() {

    let args = Array.from(arguments); 

    let totalLength = 0;
    
    for(let i = 0; i < args.length; i++) {
        totalLength += args[i].length;
    }

    let averageLength = totalLength / args.length;
    console.log(totalLength);
    console.log(Math.round(averageLength));
}

//Exercise 2:

