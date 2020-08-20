function subtract() {
   let a = +document.getElementById('firstNumber')
   .value;
   let b = +document.getElementById('secondNumber')
   .value;

   let result = document.getElementById('result');

   let subtract = a - b;
   result.innerText = String(subtract);

}