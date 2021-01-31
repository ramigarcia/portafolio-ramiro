const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector('.form'),
    $inputs = d.querySelectorAll('.form [required]');
  console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('contact__form-error', 'none');
    input.insertAdjacentElement('afterend', $span);
  })

  d.addEventListener('keyup', (e) => {
    if (e.target.matches('.form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern) {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name)
          : console.log('succes')
      }
      if (!pattern) {

      }
    }
  })
}