// Exercise 1:

function printConnected(input) {
    const separator = input[input.length - 1]; 
    
    console.log(input.slice(0, input.length - 1).join(separator));
}

// Exercise 2: 

function printNthElement(input) {

    const step = parseInt(input[input.length - 1]);

    for(let i = 0; i < input.length - 1; i += step) {
        console.log(input[i]);
    }

}

// Exercise 3:

function addRemove(input) {

    let result = new Array;
    let number = 0;
    input.forEach(element => {
        number++;
        if (element === 'add') {
            result.push(number);
        } else {
            if (result.length > 0) {
                result.pop();
            }
        }
    });

    if (result.length == 0) {
        console.log('Empty')
    } else {
        result.forEach(element => {
            console.log(element)
        });
    }

}

//Exercise 4:

function rotateArray(input) {
    let rotations = input.pop();
   
    //input.pop();

    rotations = rotations % input.length;

    for(let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

//Exercise 5:

function increasingSubsequence(arr) {
   arr = arr.map(Number);
    let max = Number.MIN_VALUE;
    let result = [];

    for (let i = 0; i< arr.length; i++) {
            let element = arr[i];
        if (element >= max) {
            result.push(element)
            max = element;
        }
    };

    console.log(result.join('\n'))
}

// Exercise 7:

function sortArray(input) {

   

    input.sort(function sortArr(a, b) {
        let result = 0;
        if (a.length > b.length) {
            result = 1;
        } else if (a.length < b.length) {
            result = -1
        } else {
            a = a.toUpperCase();
            b = b.toUpperCase();

            if (a > b) {
                result = 1;
            } else if (b > a) {
                result = -1;
            }
        }
        return result;
    });

    console.log(input.join('\n'));
}

// Exercise 8:

function magicMetrics(input) {
    let isMagic = true;
    let sum = input[0].reduce(function(acc, curr){return acc + curr});

    for (let i = 1; i < input.length; i++) {
        if (sum != input[i].reduce(function(acc, curr){return acc + curr})) {
            isMagic = false;
        }
    }

    for(let col=0; col<input[0].length; col++) {
        let sumCol = 0;
        for(let row=0; row<input.length; row++) {
            sumCol += input[row][col];
        }

        if(sumCol != sum) {
            isMagic = false;
        }
    }
    console.log(isMagic);
}

magicMetrics([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );