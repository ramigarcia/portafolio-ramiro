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
  });

  d.addEventListener('keyup', (e) => {
    if (e.target.matches('.form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== '') {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add('is-active')
          : d.getElementById($input.name).classList.remove('is-active');
      }
      if (!pattern) {
        return $input.value === ''
          ? d.getElementById($input.name).classList.add('is-active')
          : d.getElementById($input.name).classList.remove('is-active');
      }
    }
  })
  d.addEventListener('submit', (e) => {
    e.preventDefault('');
    const $loader = d.querySelector('.contact__form-loader'),
      $response = d.querySelector('.contact__form-response');

    $loader.classList.remove('none')

    setTimeout(() => {
      $loader.classList.add('none')
      $response.classList.remove('none')
      $form.reset();
      setTimeout(() => $response.classList.add('none'), 3000)
    }, 4000);
  })
}
// Envio del formulario