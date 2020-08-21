function solve() {
  
    document.querySelector('#button')
    .addEventListener('click', onClick);


    function onClick(e) {
    let input = document.querySelector('#input')
    .value;
    let from = document
    .querySelector('#selectMenuFrom').value
    let to = document
    .querySelector('#selectMenuTo').value
    let result = 
    document.querySelector('#result');

    let isBinary = 
    chechIfNumIsBinary(input);

    if (from === 'binary' && !isBinary) {
        alert('Number is not Binary format!')
        return;
    }

    if (from === 'decimal' && isBinary) {
        alert('Number is not Binary format!')
        return;
    }

    if (from === to) {
        result.value = input;
    } else {
        if (from === 'decimal') {
            result.value = decimalToBinary(input);
        } else {
            result.value = binaryToDecimal(input)
        }
    } 
    }

    function decimalToBinary(number){
        var binary = "";
        var temp = +number;
        while(temp > 0){
            if(temp % 2 == 0){
                binary = "0" + binary;
                
            }
            else {
                binary = "1" + binary;
               
            }
            temp = Math.floor(temp / 2);
        }
        return binary;
    }
    function binaryToDecimal(string) {
        let decimal = +0;
        let bits = +1;
        for(let i = 0; i < string.length; i++) {
            let currNum = +(string[string.length - i - 1]);
            if(currNum === 1) {
                decimal += bits;
            }
            bits *= 2;
        }
        return decimal;
    }

    function chechIfNumIsBinary(input) {
        const regex = new RegExp('[01]+');
    if (regex.test(input) && input.substring(0, 1) !== '0') {
        return true;
    } else {
        return false;
    }
    }
}