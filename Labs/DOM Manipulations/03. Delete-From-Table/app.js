

function deleteByEmail() {
    let customers = 
Array.from(document.querySelector('#customers')
.querySelector('tbody')
.querySelectorAll('tr'));
    let eMailInput = document.querySelector('input[name="email"]');
    let eMail = eMailInput.value;

    let exists = false;

    for (let i = 0; i < customers.length; i++) {
        let customer = customers[i];
        let emailNode = 
        customer.childNodes[3];

        if (emailNode.innerText === eMail) {
          document.querySelector('#customers')
            .querySelector('tbody').deleteRow(i)
            exists = true;
        }
    }

    if (!exists) {
        alert('User with such email does not exist!');
        eMailInput.value = '';
        return;
    }

    eMailInput.value = '';
}