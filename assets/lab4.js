// Оновлює число біля повзунка та підтверджує локальне проходження форми.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#survey-form');
  const slider = document.querySelector('#interest');
  const output = document.querySelector('#interest-value');
  const status = document.querySelector('#form-status');

  slider.addEventListener('input', () => { output.value = slider.value; });

  form.addEventListener('submit', (event) => {
    // Не надсилаємо навчальні або парольні дані в мережу.
    event.preventDefault();
    status.textContent = 'Перевірку пройдено. Це демонстраційна форма: дані не надсилалися та не зберігалися.';
    status.classList.add('is-visible');
    status.focus({ preventScroll: true });
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      output.value = slider.value;
      status.textContent = '';
      status.classList.remove('is-visible');
    }, 0);
  });
});
