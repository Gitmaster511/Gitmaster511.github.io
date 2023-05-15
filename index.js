const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menu = document.getElementById('menu');

const handleMenu = () => {
  // if menu is closed
  if (menu.classList.contains('translate-x-full')) {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
  } else {
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0');
  }
};

openMenuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', handleMenu);
