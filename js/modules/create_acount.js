export default function createAcount() {
  const emailSignUp = document.getElementById('emailSignUp').value
  const passwordSignUp = document.getElementById('pssSignUp').value
  const cardSignUp = document.getElementById('cardSignUpForm')
  const overlay = document.getElementById('overlay')
  auth
    .createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
    .then((userCredential) => {
      formSignUp.reset();
      cardSignUp.classList.remove('show-card-form')
      overlay.classList.remove('show-overlay')

      // window.location.assign("http://127.0.0c.1:5500/hola.html")
    })
}