function solve() {
  
  let generate = 
  document.querySelectorAll('button')[0];
  generate.addEventListener('click', onGenrate);
let buy = 
document.querySelectorAll('button')[1];
buy.addEventListener('click', onBuy);



}
function onGenrate() {

  let table = document.querySelector('table');
  let tableBody = table.querySelector('tbody');

  let input = JSON.parse(document.querySelector('#generate').value)[0];
  let newRow = document.createElement('tr');
  
  newRow.appendChild(createTd(createImageNode(input.img)));
  newRow.appendChild(createTd(createParagraph(input.name)));
  newRow.appendChild(createTd(createParagraph(input.price)));
  newRow.appendChild(createTd(createParagraph(input.decFactor)));
  newRow.appendChild(createTd(createCheckBox()));

  tableBody.appendChild(newRow);

  document.querySelector('#generate').value = '';
}

function onBuy() {
  let table = document.querySelector('table');

  let totalPrice = 0;
  let decorationFactor = 0;
  let items = [];

  let rows = table.querySelector('tbody').querySelectorAll('tr');
  rows.forEach(row => {
    let rowInfo = row.children;
    let checkBox = row.querySelector('input');
    if (checkBox.checked === true) {
      let internalInfo = row.querySelectorAll('p');
      items.push(internalInfo[0].textContent)
      totalPrice += +internalInfo[1].textContent;
      decorationFactor += +internalInfo[2].textContent;
    }
  })
  let result = `Bought furniture ${items.join(' ')}, 
  Total price: ${totalPrice}, ADC: ${decorationFactor / items.length}`
  let resultArea = document.querySelectorAll('textarea')[1];
  resultArea.textContent = result;
}

function createTd(object) {
  let tableData = document.createElement('td');
  tableData.appendChild(object);
  return tableData;
}

function createParagraph(string) {
  let paragraphNode = document.createElement('p');
  paragraphNode.textContent = string;

  return paragraphNode;
}

function createImageNode(string) {
  let imageNode = document.createElement('img');
  imageNode.src = string;
  return imageNode;
}

function createCheckBox() {
  let checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
  return checkBox;
}



