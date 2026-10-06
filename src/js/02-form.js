const form = document.querySelector('.feedback-form');

const storage_key = 'feedback-form-state';

form.addEventListener('input', event => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const formState = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  console.log({
    email,
    message,
  });

  localStorage.removeItem(storage_key);
  form.reset();
});

const saveData = localStorage.getItem(storage_key);
if (saveData) {
  const { email, message } = JSON.parse(saveData);
  form.elements.email.value = email;
  form.elements.message.value = message;
}
