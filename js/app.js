const navItems = document.querySelector('.nav__link');
const openNavBtn = document.querySelector('.nav__hamburger');
const closeNavBtn = document.querySelector('.nav__close');

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})


// Close nav menu when menu a menu item is clicked
if(window.innerWidth < 1024){
    document.querySelectorAll('.nav__ul li').forEach(navItems => {
        navItems.addEventListener('click', () => {
            closeNav();
        });
    });
};