const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector('.form'),
    $inputs = d.querySelectorAll('.form [required]');
  console.log($inputs)

  d.addEventListener('keyup', (e) => {
    if (e.target.matches('.form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
    }
  })
}