function attachEventsListeners() {
let inputs = Array.from(document.querySelector('main')
.querySelectorAll('div'));
inputs.forEach(input => {
    input.children[2].
    addEventListener('click', onClick);
})

function onClick(e) {
    let seconds = 0;
    let target = e.target;
    let input = target.previousElementSibling.value;
    if (target.id === 'daysBtn') {
        seconds = input * 86400
    } else if (target.id === 'hoursBtn') {
        seconds = input * 3600;
    } else if (target.id === 'minutesBtn') {
        seconds = input * 60;
    } else {
        seconds = input;
    }

    for (let i = 0; i < inputs.length; i++) {
        let currentDiv = inputs[i];

        if (i === 0) {
           currentDiv.children[1].value = seconds / 86400;
        } else if (i === 1) {
            currentDiv.children[1].value = seconds / 3600;
        } else if (i === 2) {
            currentDiv.children[1].value = seconds / 60;
        } else {
            currentDiv.children[1].value = seconds;
        }
    }
}
}