function solve(){
let tableBody = document.querySelector('tbody');
tableBody.addEventListener('click', onClick);

function onClick(e) {
   let rows = Array.from(tableBody.children);
   let target = e.target;
   if (target.tagName = 'td') {
      target = target.parentNode;
   }
   let colorBeforeClick = target.style.backgroundColor;
   rows.forEach(row => {
      row.style.backgroundColor = '';
   })
   
   if (colorBeforeClick === '') {
      target.style.backgroundColor = 'rgb(65, 63, 94)';
   } 
}

}
