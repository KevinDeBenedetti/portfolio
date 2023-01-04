const burger = document.querySelector('.menu-burger');
const nav = document.querySelector('.menu-nav');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// close.addEventListener('click', () => {
//     nav.classList.remove('active');
// });
