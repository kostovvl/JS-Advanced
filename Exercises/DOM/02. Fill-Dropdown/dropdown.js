function addItem() {
    let menu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let textStr = text.value;
    let option = document.createElement('option');
    option.innerText = textStr;
    option.value = value.value;

    menu.appendChild(option);

    text.value = '';
    value.value = '';

}