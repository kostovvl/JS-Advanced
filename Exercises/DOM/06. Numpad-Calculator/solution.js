function solve() {

    let keyboard = 
    document.querySelector('.keys');

    keyboard.addEventListener('click', function(e){

        let currentPress = e.eventPhase;
        let expressionOutput = 
        document.getElementById('expressionOutput');

        if (currentPress === 'c') {
            expressionOutput.innerText = '';
        } else {
            expressionOutput.innerText += currentPress;
        }

    })

}