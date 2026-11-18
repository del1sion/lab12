// Демонстраційна перевірка форми: дані нікуди не надсилаються.
const form = document.querySelector('#registration-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = document.querySelector('#password').value;
  const confirmation = document.querySelector('#confirm-password').value;
  if (password !== confirmation) {
    message.textContent = 'Паролі не збігаються. Спробуйте ще раз.';
    message.className = 'form-message error';
    return;
  }
  message.textContent = 'Форму заповнено правильно! Це демонстраційна реєстрація.';
  message.className = 'form-message success';
  form.reset();
});
