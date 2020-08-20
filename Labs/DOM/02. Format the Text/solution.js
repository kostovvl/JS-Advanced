function solve() {
  const input =
   document.querySelector('#input');
  const outpurString =
   document.querySelector('#output');

   const inputStringArr = 
   input.innerText.split('. ');

   let inputParagraph = document.createElement('p');
   let counter = 0;
   for(let i = 0; i < inputStringArr.length; i++) {
     counter++;
     inputParagraph.innerText += inputStringArr[i];
     if (counter % 3 === 0) {
       outpurString.appendChild(inputParagraph);
       inputParagraph = document.createElement('p');
       counter = 0;
     }
   }

   if (counter > 0) {
    outpurString.appendChild(inputParagraph);
   }
}