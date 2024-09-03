document.querySelector('#open-dialog').addEventListener('click', () => {


  const dialog = document.querySelector('dialog');
  dialog.returnValue = "OK"

  document.querySelector('button#cancel').addEventListener('click', () => {
    dialog.returnValue = "Cancel"
    dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.querySelector('output').textContent = dialog.returnValue;
   });

    requestIdleCallback(() => {
       dialog.showModal();

       // document.querySelector('dialog').open = true
    });
  
  });