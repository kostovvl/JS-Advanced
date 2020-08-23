function focus() {
    let inputSections =
    document.querySelector('#input-sections');
    
    inputSections.addEventListener('mouseover', onMouseOver);
    inputSections.addEventListener('mouseout', onMouseOut);
    
     
     function onMouseOver(e) {
         let currentSelector = e.target;
         
         if (currentSelector.nodeName === 'INPUT') {
             currentSelector.parentNode.style.background = "grey"
         }
     }

     function onMouseOut(e) {
        let currentSelector = e.target;
        if (currentSelector.nodeName === 'INPUT') {
            currentSelector.parentNode.style.background = "white"
        }
     }
    
}