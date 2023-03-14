var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function () {

    if (iconMenu.getAttribute('src') =='img/menu.svg') {
        iconMenu.setAttribute('src','img/close.svg')
    } else {
        iconMenu.setAttribute('src','img/menu.svg')
    }
    menu.classList.toggle('active');
})