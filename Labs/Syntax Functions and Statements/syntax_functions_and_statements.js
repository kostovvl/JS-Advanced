


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

function mathOperations(firstNumber, secondNumber, operator) {
    let result = 0;

   switch (operator){
       case '+': result = firstNumber + secondNumber; break;
       case '-': result = firstNumber - secondNumber; break;
       case '*': result = firstNumber * secondNumber; break;
       case '/': result = firstNumber / secondNumber; break;
       case '%': result = firstNumber % secondNumber; break;
       case '**': result = firstNumber ** secondNumber; break;
   }

   return result;
}

//Exercise 3:

function sumOfNumbersNtoM(numberN, numberM) {

    let result = 0;
    let firstNumber = +numberN;
    let secondNumber = +numberM;

    for(let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }

    return result;
}

//Exercise 4:

function findLargestNumber() {
    let input = Array.from(arguments);

    let result = input[0];

    for(let i = 1; i < input.length; i++) {
        let current = input[i];
        if (current > result) {
            result = current;
        }
    }

    console.log(`The largest number is ${result}.`)
}

//Exercise 5:

function circleArea(input) {

    let inputType = typeof(input);

    if (inputType === 'number') {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

//Exercise 6:

function squareOfStars(input){
    for (let i = 0; i < input; i++) {
        console.log('* '.repeat(input));
    }
}

//exercise 7:

function dayOfTheWeek(input) {
    let result = '';
    switch (input) {
        case 'Monday': result = '1'; break;
        case 'Tuesday': result = '2'; break;
        case 'Wednesday': result = '3'; break;
        case 'Thursday': result = '4'; break;
        case 'Friday': result = '5'; break;
        case 'Saturday': result = '6'; break;
        case 'Sunday': result = '7'; break;
        default: result = 'error'; break;
    }

    console.log(result);
}

function agregateElements(input) {

    let sum = 0;
    let inverse = 0;
    let concatenated = '';

    for(let i = 0; i < input.length; i++) {
        let current = input[i];
        sum += current;
        inverse += 1/current;
        concatenated += String(current);
    }

    console.log(sum);
    console.log(inverse);
    console.log(concatenated);

}

