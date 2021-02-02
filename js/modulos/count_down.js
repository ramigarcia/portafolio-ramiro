const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes = Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60)),
      seconds = Math.floor(limitTime % (1000 * 60) / (1000));

    $countdown.innerHTML = `
    <h3 class="faltan">Para mi cumpleaños faltan:</h3> 
    <div class="dates">
      <div class="days">${days} <br><span>días</span></div>
      <div class="hours">${hours} <br><span>horas</span></div> 
      <div class="minutes">${minutes} <br><span>minutos</span></div> 
      <div class="seconds">${seconds} <br><span>segundos</span></div>
    </div>`

    // console.log(countdownDate, now, limitTime)
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3 class="happy__birthday">${finalMessage}</h3>`
    }
  }, 1000);
}