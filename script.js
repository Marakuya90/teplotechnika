window.addEventListener('DOMContentLoaded', () => {

 const 
    modalTrigger = document.querySelector('.btn1'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('#close');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    modalTrigger.addEventListener('click',openModal);
       
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; 
    }
    
    modalCloseBtn.addEventListener('click', closeModal);

})