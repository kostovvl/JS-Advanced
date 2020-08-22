

function addItem() {
    let items = 
document.querySelector('#items');
    const newItem = document.querySelector('#newText')
    const newItemText = newItem.value;
    let newListElement = document.createElement('li');
    newListElement.innerText = newItemText;
    let deleteOption = document.createElement('a');
    deleteOption.innerText = ('[Delete]');
    deleteOption.href = '#'
    items.addEventListener('click', onDelete);
    newListElement.appendChild(deleteOption);
    items.appendChild(newListElement);

    newItem.value = '';

    function onDelete(e) {
        e.preventDefault;
       const target = e.target;
       const parent = target.parentElement;
       parent.remove();
    }
}



