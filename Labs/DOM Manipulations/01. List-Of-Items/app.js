let items = 
document.querySelector('#items');

function addItem() {
    const newItem = document.querySelector('#newItemText')
    const newItemText = newItem.value;
    let newListElement = 
    document.createElement('li');
    newListElement.innerText = 
    newItemText;
    items.appendChild(newListElement);

    newItem.value = '';
}