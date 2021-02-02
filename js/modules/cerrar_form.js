const cardSignUp = document.getElementById('cardSignUpForm')
const overlay = document.getElementById('overlay')

const cardLogin = document.getElementById('cardLogin')

export default function closeForm() {
  cardSignUp.classList.remove('show-card-form')
  cardLogin.classList.remove('show-card-form')
  overlay.classList.remove('show-overlay')
}

