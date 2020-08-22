function stopwatch() {
let startButton = document.querySelector('#startBtn')
let stopButton = document.querySelector('#stopBtn');

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

let time = document.querySelector('#time');
let id;

    function onStart(e) {
        let seconds = 0;
        let minutes = 0;
        startButton.disabled = true;
        stopButton.disabled = false;
        id = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
            }
            time.innerText = `${minutes} : ${seconds}`;
        }, 1000); 
    }



    function onStop(e) {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearTimeout(id);
    }


}