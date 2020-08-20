function solve() {
   let inputContainer = 
   document.getElementById('send');

   inputContainer.addEventListener('click', function(e){

      let input = document.getElementById('chat_input');

      let message = input.value;

      let chatMessages = document.
      getElementById('chat_messages');

      let myMessage = document.createElement('div');
      myMessage.className = 'message my-message';
      myMessage.innerText = message;
      chatMessages.appendChild(myMessage);

      input.value = '';

   })
}


