function validate() {
    let inputField = 
    document.querySelector('#email');
    inputField.addEventListener('change', onChange);
    inputField.addEventListener('click', onClick);

    function onChange(e) {
        let email = inputField.value;
        if (!email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')) {
            inputField.classList.add('error');
        }
    }

    function onClick(e) {
        inputField.classList.remove('error');
        inputField.value = ''; 
    }
}
