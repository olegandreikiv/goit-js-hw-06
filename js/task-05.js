const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
    const value = input.value;

    if (value === '') {
        output.textContent = 'Anonimus';
    } else {
        output.textContent = value;
    }
})