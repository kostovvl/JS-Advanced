function lockedProfile() {
    let main = 
    document.querySelector('main');

    main.addEventListener('click', onClick);

    function onClick(e) {
        let hiddenfield = 
        e.target.parentNode.children[9];

        let property = hiddenfield.style.display;

        if (property === '') {
            hiddenfield.style.display = 'block';
            e.target.textContent = 'Show Less'
        } else {
            hiddenfield.style.display = 'none';
            e.target.textContent = 'Show More'
        }
    }
}