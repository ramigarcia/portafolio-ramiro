const d = document;

const hamburger = d.querySelector('.menu')

const closeMenu = d.querySelector('.closeMenu')
const overlay = d.querySelector('.overlay')
const navigation = d.querySelector('.navigation__list')

hamburger.addEventListener('click', () => {
  overlay.classList.add('show')
  navigation.classList.add('show-menu')
  closeMenu.classList.add('show')
})

closeMenu.addEventListener('click', () => {
  overlay.classList.remove('show')
  navigation.classList.remove('show-menu')
  console.log('close')
  closeMenu.classList.remove('show')
})


window.addEventListener('click', e => {
  if (navigation.classList.contains("show-menu")
    && e.target != navigation && e.target != hamburger) {
    navigation.classList.remove("show-menu");
    closeMenu.classList.remove("show");
    overlay.classList.remove("show");
  }
})