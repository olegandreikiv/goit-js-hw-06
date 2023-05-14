
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть усі поля');
  } else {
    const data = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(data);
    form.reset();
  }
}