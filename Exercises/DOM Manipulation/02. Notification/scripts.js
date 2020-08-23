function notify(message) {
        let notification = document.querySelector('#notification');
        notification.textContent = message;
        notification.style.display = "block";
        setInterval(function stop () {
            notification.textContent = '';
            notification.style.display = "none";
        }, 2000)

}