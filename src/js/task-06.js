const input = document.querySelector('#validation-input');
const requiredLength = parseInt(input.getAttribute('data-length'));

console.log(requiredLength);

input.addEventListener(`focus`, onInputFocus);
input.addEventListener(`blur`, onInputBlur);

function onInputFocus(event) {
  event.currentTarget.classList.remove(`valid`);
  event.currentTarget.classList.remove(`invalid`);
}

function onInputBlur(event) {
  event.currentTarget.value.length === requiredLength
    ? event.currentTarget.classList.add(`valid`)
    : event.currentTarget.classList.add(`invalid`);
}
