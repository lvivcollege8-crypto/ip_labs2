/* Керування доступним нативним модальним вікном. */
const lab6Dialog = document.querySelector(".lab6-dialog");

document.querySelectorAll("[data-open-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    if (lab6Dialog && !lab6Dialog.open) lab6Dialog.showModal();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => lab6Dialog?.close());
});

lab6Dialog?.addEventListener("click", (event) => {
  if (event.target === lab6Dialog) lab6Dialog.close();
});
