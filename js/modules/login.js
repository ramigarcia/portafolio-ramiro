/* guardados.addEventListener('click', (event)=>{
  event.preventDefault('');
  auth.onAuthStateChanged(user => {
    if(user){
      // location.hash = "/guardados.html"
      location.href = 'index.html'
    }
    else{
      cardSignUp.classList.add('show-card-sign-up-form')
      location.hash = '#inicio.html'
      overlay.classList.add('show-overlay')
    }
  })
}) */

const cardLogin = document.getElementById('cardLogin')
const overlay = document.getElementById('overlay')

export default function login() {
  const emailLogin = document.getElementById('emailLogin').value
  const pssLogin = document.getElementById('pssLogin').value
  auth
    .signInWithEmailAndPassword(emailLogin, pssLogin)
    .then((userCredential) => {
      formLogin.reset()

      cardLogin.classList.remove('show-card-form')
      overlay.classList.remove('show-overlay')
    })
}