function solve() {

  let inputArr = Array.from(document.querySelector('#input')
  .innerHTML.split('. '));

  let output = document.querySelector('#output');

  let counter = 0;
  let paragraph = document.createElement('p');

  for(let i = 0; i < inputArr.length; i++) {
    counter++;
    paragraph.innerHTML += inputArr[i];
    if (counter % 3 === 0) {
      output.appendChild(paragraph);
      paragraph = document.createElement('p');
      counter = 0;
    }
  }

  if (counter < 3) {
    output.appendChild(paragraph);
  }

}