const d = document;

export default function hideAlert() {
  const $closeAlert = d.getElementById('closeAlertJobs');
  const $alertJobs = d.getElementById('alertJobs')

  $closeAlert.addEventListener('click', () => {
    $alertJobs.classList.add('hide__alert__jobs');
  })
}