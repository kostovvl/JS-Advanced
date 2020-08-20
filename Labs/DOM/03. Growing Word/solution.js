function growingWord() {

  let growingWord =
   document.querySelector('#exercise > p');
   let px = 8;
   let colorChanges = {
     'blue' : 'green',
     'green' : 'red',
     'red' : 'blue'
   }

   if (!growingWord.hasAttribute("style")) {
     growingWord.setAttribute("style", `color: blue; font-size: ${px}px`) 
   } else {
     let currentPx = growingWord.style["font-size"];
      px = currentPx.substring(0, currentPx.length - 2) * 2;
      if (px >= 64) {
        px = 8;
      }
     let currentColor = growingWord.style["color"];

     
 

     growingWord.setAttribute("style", 
     `color : ${colorChanges[currentColor]}; font-size : ${px}px`)
   }

  
}