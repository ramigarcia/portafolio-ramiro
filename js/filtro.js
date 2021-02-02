// Filtros
// Productos
const productoFiltro = document.getElementById('productoFiltro')
const productoLista = document.getElementById('productoLista')
const productoChevron = document.getElementById('productoChevron')

productoFiltro.addEventListener('click', () => {
  colorLista.classList.add("in__active")
  productoLista.classList.toggle("in__active")
  productoChevron.classList.toggle("rotate")
  colorChevron.classList.remove("rotate")
})

productoChevron.addEventListener('click', () => {
  colorLista.classList.add("in__active")
  productoLista.classList.toggle("in__active")
  productoChevron.classList.toggle("rotate")
  colorChevron.classList.remove("rotate")
})

// Colores
const colorFiltro = document.getElementById('coloresFiltro')
const colorLista = document.getElementById('colorList')
const colorChevron = document.getElementById('chevronColor')

colorFiltro.addEventListener('click', () => {
  productoLista.classList.add("in__active")
  colorLista.classList.toggle("in__active")
  colorChevron.classList.toggle("rotate")
  productoChevron.classList.remove("rotate")
})

colorChevron.addEventListener('click', () => {
  productoLista.classList.add("in__active")
  colorLista.classList.toggle("in__active")
  colorChevron.classList.toggle("rotate")
  productoChevron.classList.remove("rotate")
})

// Filtro Mobile
const chevronDownUpProducts = document.getElementById('chevronProducts')
const chevronDownUpColors = document.getElementById('chevronColors')

const productsMobile = document.getElementById('productsMobileFilter')
const navProductosMobile = document.getElementById('navFilterProducts')

productsMobile.addEventListener('click', (e) => {
  e.preventDefault('');
  navProductosMobile.classList.toggle("nav-filter-mobile-visible")
  navColorsMobile.classList.remove("nav-filter-mobile-visible")
  chevronDownUpProducts.classList.toggle("chevron-rotate")
})

const colorsMobile = document.getElementById('colorsMobileFilter')
const navColorsMobile = document.getElementById('navFilterColorsMobile')

colorsMobile.addEventListener('click', (event) => {
  event.preventDefault('');
  navColorsMobile.classList.toggle("nav-filter-mobile-visible")
  navProductosMobile.classList.remove("nav-filter-mobile-visible")
  chevronDownUpColors.classList.toggle("chevron-rotate")
})

