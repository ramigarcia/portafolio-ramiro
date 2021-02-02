export default function loadIconsNav() {
  const navList = document.getElementById('navList')
  const cardSignUp = document.getElementById('cardSignUpForm')
  const overlay = document.getElementById('overlay')

  const icons = {
    iconHeartSave: `
    <li class="nav__list__item">
      <a href="" class="nav__list__item__element" id="guardados">
        <i class="bx bx-heart"></i>
      </a>
    </li>
    `,

    iconCartCarrito: `
    <li class="nav__list__item">
      <a href="" class="nav__list__item__element" id="carrito">
        <i class="bx bx-cart"></i>
      </a>
    </li>
    `,

    iconTruckEnvios: `
    <li class="nav__list__item">
      <a href="" class="nav__list__item__element" id="envio">
        <i class="bx bxs-truck"></i>
      </a>
    </li>
    `,

    iconUserProfile: `
    <li class="nav__list__item">
      <a href="" class="nav__list__item__element" id="profile">
        <i class="bx bx-user"></i>
      </a>
    </li>`,
    iconLogOut: `
    <li class="nav__list__item">
      <a href="#cerrar_sesion" class="nav__list__item__element" id="logout">
        <i class='bx bx-log-out'></i>
      </a>
    </li>
    `,
    iconLogIn: `
    <li class="nav__list__item">
      <a href="#iniciar_sesion" class="nav__list__item__element" id="login">
        Inicar Sesion
      </a>
    </li>
    `,
    signUp: `
    <li class="nav__list__item">
      <a href="#crear_cuenta" class="nav__list__item__element" id="createAccount">
        Crear Cuenta
      </a>
    </li>
    `
  };

  auth.onAuthStateChanged(user => {
    if (user) {
      navList.innerHTML = `${icons.iconHeartSave} ${icons.iconCartCarrito} ${icons.iconTruckEnvios} ${icons.iconUserProfile} ${icons.iconLogOut}`

      cardSignUp.classList.remove('show-card-form')
      overlay.classList.remove('show-overlay')
    }
    else {
      navList.innerHTML = `
      ${icons.iconLogIn} ${icons.signUp}
      `
    }
  })
}