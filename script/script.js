window.addEventListener('DOMContentLoaded', () => {

    const 
        modalTrigger = document.querySelector('.func__btn'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelectorAll('.close'),
        modalRegistrationBtn = document.querySelector('#registr'),
        inputform = document.querySelector('.inputform'),
        registration = document.querySelector('.registration')
   
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    modalTrigger.addEventListener('click',openModal);
     
    function openRegistr(event) {
        event.preventDefault();
        modal.classList.add('show');
        modal.classList.remove('hide');
        inputform.classList.add('hide');
        registration.classList.remove('hide');
        registration.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    modalRegistrationBtn.addEventListener('click', openRegistr);

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // registration.classList.add('hide');
        // inputform.classList.add('show'); 
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.forEach( btn => {
        btn.addEventListener('click', closeModal);
    });


  
})

    