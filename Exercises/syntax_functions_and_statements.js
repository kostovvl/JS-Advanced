//Exercise 1:

function fruitCalculator(fruit, grams, pricePerKilo){

    let kilograms = grams/1000;
    let totalPrice = kilograms * pricePerKilo;
    let result = 'I need $'+ totalPrice.toFixed(2) +' to buy '
     + kilograms.toFixed(2) + ' kilograms ' + fruit + '.';
    console.log(result);
}

//Exercise 2:


function task2(number1, number2) {
   let smallerNumber = Math.min(number1, number2);

   let gcd = 1;

   for (let i = 1; i <= smallerNumber; i++) {
       if (number1 % i == 0 && number2 % i == 0) {
           gcd = i;
       }
   }

   console.log(gcd);
}

// Exercise 3:

function sameNumbers(input) {

    let inputArr = Array.from(input.toString()).map(Number);

    let areEqual = true;

    for(let i = 0; i < inputArr.length - 1; i++) {
        let current = inputArr[i];
        let current2 = inputArr[i + 1];

        if (current != current2) {
            areEqual = false;
        }
    }

    let sum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        sum += inputArr[i];
    }

    console.log(areEqual);
    console.log(sum);
}

// Exercise 4:


function calculateTime(steps, stepLength, speedKmh) {
    function calculateDistance(steps, stepLength) {
    
        return steps * stepLength / 1000;
    
    }
    

    let distanceInKm = calculateDistance(steps, stepLength);

    let seconds = distanceInKm / speedKmh * 3600;

    let breaks = distanceInKm / 0.5;

    for (let i = 0.5; i < distanceInKm; i += 0.5) {
        seconds += 60;
    }

    seconds += 1;
  

    console.log(new Date(seconds * 1000).toISOString().substr(11, 8))
}


// Exercise 5:

function roadRadar(input) {

    let speed = input[0];
    let area = input[1];

    let maxSpeed = 0;
    
    switch(area) {
        case 'motorway': maxSpeed = 130; break; 
        case 'interstate': maxSpeed = 90; break;
        case 'city': maxSpeed = 50; break;
        default: maxSpeed = 20; break;
    }

    let result = '';

    if (speed > maxSpeed) {
        let speedint = speed - maxSpeed;
        if (speedint > 40) {
            result = 'reckless driving';
        }else if (speedint > 20) {
            result = 'excessive speeding';
        } else {
            result = 'speeding';
        }
    }

    console.log(result);
}

//Exercise 6: 

function coockingByNumbers(input) {
    let number = input[0];

    for(let i = 1; i < input.length; i++) {
        let command = input[i];
       number = operation(number, command);
       console.log(number);
    }

    function operation(number, command) {
        switch (command){
            case 'chop': return number /= 2;
            
            case 'dice': return number = Math.sqrt(number);

            case 'spice': return number += 1;
    
            case 'bake': return number *= 3;
           
            case 'fillet': return number -= (number * 0.2);
        
        }
    }
}

//Exercise 7: 
function validityChecker(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
 
    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }
 
    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Exercsie 8: 

function calorieObject(input) {

    let objects = new Array;

    for(let i = 0; i < input.length -1; i += 2) {
        let foodName = input[i];
        let foodCalories = input[i + 1];

        let objectCalroies = {name: foodName, calories: foodCalories};

        objects.push(objectCalroies);
    }

    let stringValues = new Array;
    objects.forEach(element => {
        let stringValue = element.name + ': ' + element.calories;
        stringValues.push(stringValue);
    });

    console.log(`{ ${stringValues.join(', ')} }`)
}



