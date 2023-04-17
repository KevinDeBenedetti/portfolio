// Menu burger
export default function burgerMenu() {
  let burger = document.querySelector('.menu-burger');
  let nav = document.querySelector('.menu-nav');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
