const input = document.getElementById('validation-input');

input.addEventListener('input', () => {

  const value = input.value;
  const length = parseInt(input.getAttribute('data-length'));

  if (value.length === length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    }
    
});