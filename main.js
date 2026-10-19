const humBtn = document.querySelector('.hum-menu');
const menu = document.querySelector('.menu');
const footerBtn = document.querySelector('.f-Btn');
const headerBtn = document.querySelector('.h-Btn');
const headerBrands = document.querySelector('.h-brands');
const footerBrands = document.querySelector('.f-brands');

humBtn.addEventListener('click', ()=>{
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('close');
        humBtn.innerHTML = '<i class="fa-solid fa-bars icon"></i>';
        document.body.style.overflow = '';

        setTimeout(() => {
            menu.classList.remove('close');
        }, 600);
    } else {
        menu.classList.remove('close');
        menu.classList.add('open');
        humBtn.innerHTML = '<i class="fa-solid fa-xmark icon"></i>';
        document.body.style.overflow = 'hidden';
    }
 
})


   