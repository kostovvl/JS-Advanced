function solution() {
    let internalString = '';
    function append(input) {
        internalString += input;
    }

    function removeStart(input) {
        internalString = internalString.substring(+input, internalString.length);
    }

    function removeEnd(input) {
        internalString = internalString.substring(0, internalString.length - input);
    }

    function print() {
        console.log(internalString);
    }




    return{
        append, 
        removeStart, 
        removeEnd, 
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
