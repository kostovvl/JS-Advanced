function solve() {
    let container = 
    document.getElementById('button');

    container.addEventListener('click',function(e) {

        let input = document
        .getElementById('text');
        let nameLowerCase = input.value;
        
        let name =
        nameLowerCase.substring(0, 1).toUpperCase()
        + nameLowerCase.substring(1, nameLowerCase.length);
        
       let database = 
        Array.from(document.getElementById('dataBase')
        .childNodes).filter(n => n.nodeName === 'LI');

        let charSymbol = name.charCodeAt(0) - 65;

        let currentNode = database[charSymbol];
        currentNode.innerText += name;
        currentNode.innerText += ' ';

        input.value = '';

    })

}