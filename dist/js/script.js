// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// navbar-active

const navbar = document.querySelector('#navbar');
const navMenu = document.querySelector('#nav-menu');

navbar.addEventListener('click', function(){
    navbar.classList.toggle('navbar-active');
    navMenu.classList.toggle('hidden');
})
