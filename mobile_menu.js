const iconoMenu = document.querySelector('.burger');
const menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active-menu');
    console.log("m'okay")
    
});