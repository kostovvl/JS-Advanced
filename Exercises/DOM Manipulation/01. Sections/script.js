function create(words) {
let allContainers = document.querySelector('#content')
   words.forEach(word => {
      let contentContiner = document.createElement('div');
      let content = document.createElement('p');
      content.style.color = '#5555ff';
      content.textContent = word;
      contentContiner.appendChild(content);
      allContainers.appendChild(contentContiner);
   });


   allContainers.addEventListener('click', onClick);

   function onClick(e) {
      let target = e.target;
      let childNode = target.firstElementChild;
      if (childNode) {
      childNode.style.color = 'white';
   } else {
      target.style.color = 'white';
   }
   }
   


}