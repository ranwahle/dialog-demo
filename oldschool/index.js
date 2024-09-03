document.querySelector('#open-dialog').addEventListener('click', () => {
    const dialog = document.querySelector('#my-dialog');
    dialog.setAttribute('open', true);

    dialog.querySelector('button').addEventListener('click', () => {
        dialog.removeAttribute('open');
     });

});