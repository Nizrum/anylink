const input = document.querySelector('.input');
const button = document.querySelector('.button');
const link = document.querySelector('.link');

button.addEventListener('click', function () {
    link.href = input.value;
    input.value = '';
});
