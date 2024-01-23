/*jshint esversion: 6 */

const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });


menu.querySelectorAll('.header__nav_link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    body.classList.remove('lock');
  });
});
}
