// Керування доступним нативним модальним вікном і демонстраційною формою.
const subscribeButton = document.querySelector("#subscribe-button");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".modal-close");
const form = document.querySelector("#subscribe-form");
const status = document.querySelector("#modal-status");

subscribeButton?.addEventListener("click", () => {
  status.textContent = "";
  modal?.showModal();
});

closeButton?.addEventListener("click", () => modal?.close());

modal?.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Адресу перевірено. Демонстраційна форма не надсилає дані на сервер.";
});
