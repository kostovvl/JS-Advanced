function solve() {
   document.querySelector('#searchBtn')
   .addEventListener('click', onClick);
   let tableRoles = Array.from(document.querySelector('tbody').children);

   function onClick() {
      let searchBar = document.querySelector('#searchField')
      let search = searchBar.value; 
      tableRoles.forEach(tableRow => {
        let children = Array.from(tableRow.children);
        children.forEach(child => {
            if (child.textContent.includes(search)) {
              tableRow.classList.add('select')
            }
         })
      });
      searchBar.value = '';
     }
   document.querySelector('#searchField')
     .addEventListener('click', onClick2);

     function onClick2() {
      tableRoles.forEach(tableRow => {
               tableRow.classList.remove('select')
       });
     }
}