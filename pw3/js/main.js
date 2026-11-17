'use strict';
const dialog = document.querySelector('#puzzle-dialog');
const openPuzzle = document.querySelector('#open-puzzle');
const answerForm = document.querySelector('#answer-form');
const feedback = document.querySelector('#puzzle-feedback');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

openPuzzle?.addEventListener('click', () => {
  feedback.textContent = '';
  answerForm.reset();
  dialog.showModal();
  document.querySelector('#answer').focus();
});

answerForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = new FormData(answerForm).get('answer').trim().toLocaleLowerCase('uk');
  if (/карт(а|и)|мапа/.test(answer)) {
    feedback.textContent = 'Так! Це карта: на ній є міста й річки, але немає будинків і води.';
    feedback.dataset.state = 'success';
  } else {
    feedback.textContent = 'Цікава версія! Підказка: на ній можна побачити країни, міста й річки.';
    feedback.dataset.state = 'hint';
  }
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  formStatus.textContent = 'Дякуємо! Поля перевірені у браузері. Демонстраційна форма не надсилає дані на сервер.';
  formStatus.dataset.state = 'success';
});
