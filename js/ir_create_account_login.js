const btnIrACreateAccount = document.getElementById('irACreateAcoutnBtn')
const btnIrALogin = document.getElementById('irALoginBtn')

const cardLogin = document.getElementById('cardLogin')

const cardSignUp = document.getElementById('cardSignUpForm')
btnIrACreateAccount.addEventListener('click', e => {
  e.preventDefault('');
  cardSignUp.classList.add('show-card-form')
  cardLogin.classList.remove('show-card-form')
})

btnIrALogin.addEventListener('click', e => {
  e.preventDefault('');
  cardSignUp.classList.remove('show-card-form')
  cardLogin.classList.add('show-card-form')
})