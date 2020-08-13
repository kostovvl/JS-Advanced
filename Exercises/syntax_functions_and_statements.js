//Exercise 1:

function fruitCalculator(fruit, grams, pricePerKilo){

    let kilograms = grams/1000;
    let totalPrice = kilograms * pricePerKilo;
    let result = 'I need $'+ totalPrice.toFixed(2) +' to buy '
     + kilograms.toFixed(2) + ' kilograms ' + fruit + '.';
    console.log(result);
}

//Exercise 2:


function task2(number1, number2) {
   let smallerNumber = Math.min(number1, number2);

   let gcd = 1;

   for (let i = 1; i <= smallerNumber; i++) {
       if (number1 % i == 0 && number2 % i == 0) {
           gcd = i;
       }
   }

   console.log(gcd);
}

