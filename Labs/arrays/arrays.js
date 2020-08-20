// Exercise 1:

function sumOfNumbers(input) {

    let result = 0;

    if (input.length == 1) {
        result += parseInt(input[0]) * 2
    } else {

    for(let i = 0; i < input.length; i++) {
        if (i == 0 || i == input.length - 1) {
            result += parseInt(input[i])
        }
    }
}

    console.log(result);

}

// Exercise 2: 

function evenPossitions(input) {
    let result = new Array;

    for(let i = 0; i < input.length; i += 2) {
    
            result.push(input[i])
    }
    console.log(result.join(' '));
}

//Exercise 3:

function negativePossitive(input) {

    let result = new Array;

    for(let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current >= 0) {
            result.push(current);
        } else {
            result.unshift(current);
        }
    }

    result.forEach(number => console.log(number))
}

// Exercise 4:

function lastKNumbers(n, k) {
    let result = new Array;

    for (let i = 1; i <= n; i++) {

        if (i == 1) {
            result.push(i);
            continue;
        }

        let sumOfLastKElements = 0;
        let stop = 0;
        for(let j = result.length - 1; j >= 0; j--) {
            sumOfLastKElements += result[j];
            stop++;
            if (stop == k) {
                break;
            }
        }
        result.push(sumOfLastKElements);
    }

    console.log(result.join(' '));
}

// Exercise 5:

function processOddNumbers(input) {
    let result = new Array;

    for(let i = 0; i <= input.length; i++) {
        if (i == 0 || i % 2 == 0) {
            continue;
        }

        result.push(input[i] * 2);
    }

    const resultReversed = new Array;

    result.forEach(element => {
        resultReversed.unshift(element);
    });
    
    console.log(resultReversed.join(' '));
}

// Exercise 6:

function smallestTwoNumbers(input) {
    input.sort(function(a, b){return a-b})

    let result = [input[0], input[1]];

    console.log(result.join(' '));

}  


// Exercise 7:
function biggestElement(matrix) {
    let result = Number.MIN_VALUE;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            let current = matrix[i][j];

            if (current >= result) {
                result = current;
            }
        }
    }

    console.log(result);
}

//Exercise 8:

function diagonalSums(matrix) {

    function upLeftDownRight(input) {
        let result = 0;

        for (let i = 0; i < input.length; i++) {
            result += input[i][i];
        }

        return result;
    }

    function upRightDownLeft(input) {
        let result = 0;

        let counter = 0;

        for (let i = 0; i < input.length; i++) {
            
            result += input[i][input[i].length - 1 - i];
            counter++;
        }

        return result;
    }

    let stats = [upLeftDownRight(matrix), upRightDownLeft(matrix)];

    console.log(stats.join(' '));

}

function equalNeigbouts(matrix) {
    let result = 0;

    for (let i = 0; i < matrix.length - 1; i++) {

        for(let j = 0; j < matrix[i].length; j++) {
            let firstElemetvertical = matrix[i][j];
            let secondElementvertical = matrix[i + 1][j];

            if (firstElemetvertical === secondElementvertical) {
                result++;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let firstElementHorisontal = matrix[i][j];
        let secondElementHorisontal = matrix[i][j+1];
        if (firstElementHorisontal === secondElementHorisontal) {
            result++;
        }
        }
        
    }

    console.log(result);
}

equalNeigbouts([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '5']]
);