function solve() {
document.querySelector('.keys')
.addEventListener('click', onClick);

document.querySelector('.clear')
.addEventListener('click', onErase);

let memory = {
    first : '',
    second : '',
    operator : ''
}

let expressionOutput = 
document.querySelector('#expressionOutput')

let result = 
document.querySelector('#resultOutput');

function onClick(e) {
    const input = e.target.value;

    if (input === '/' || input === '*' 
    || input === '-' || input === '+') {

        if (memory.operator !== '') {
            result.innerText = operate(memory.first, 
                memory.second, memory.operator);
                eraseMemory();
                memory.first = result.innerText;
        }

        memory.operator = input;

    } else if (input === '='){
        result.innerText = operate(memory.first, 
            memory.second, memory.operator);
        
    } else {
        if (memory.operator === '') {
            memory.first += input;
        } else {
            memory.second += input;
        }
    }

    if (input !== '=') {
    expressionOutput.innerText += input;
}

}

function operate(firstNum, secondNum, opr) {
    switch (opr) {
        case '/': return +firstNum / +secondNum; break;
        case '*': return +firstNum * +secondNum; break;
        case '-': return +firstNum - +secondNum; break;
        case '+': return +firstNum + +secondNum; break;
    }
}

function onErase() {
    result.innerText = '';
    expressionOutput.innerText = '';
    eraseMemory();
}

function eraseMemory() {
    memory.first = '';
    memory.second = '';
    memory.operator = '';
}

}