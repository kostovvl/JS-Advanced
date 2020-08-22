function attachGradientEvents() {
   let gradient = document.querySelector('#gradient');
    

   gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', onOut);

    let result = document.querySelector('#result');

    function onMove(e) {
        let coordinate = Math.round(e.clientX / 3);
        let resultStr = `${coordinate}%`;

        result.innerHTML = resultStr;

    }

    function onOut(e) {
        result.innerHTML = '';
    }
    
}