function addRandomNumberToModal() {
   
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    
    
    const modalBody = document.querySelector('.modal-body');
    modalBody.textContent = randomNumber;
}


addRandomNumberToModal();