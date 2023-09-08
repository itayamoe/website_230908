const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

//クリック　メニュー表示
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // メニューを非表示
    });
});

})
