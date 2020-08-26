function solve() {
    document.querySelector('#dropdown')
    .addEventListener('click', onDropdown);
   let list = document.querySelector('#dropdown-ul')
   list.addEventListener('click', onClick);
   let box = document.querySelector('#box');

   function onDropdown() {
       let ulDisplay = list.style.display;

       if (ulDisplay === '') {
           list.style.display = 'block';
       } else {
           box.style.backgroundColor = "rgb(114, 112, 112)"
           list.style.display = '';
       }
   }

   function onClick(e) {
    let tarbet = e.target;
    let rgb = tarbet.innerText;
    box.style.backgroundColor = rgb;
   }
}