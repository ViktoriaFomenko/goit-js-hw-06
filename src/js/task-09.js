const body = document.querySelector('body');
const bgColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
console.log(body);
console.log(bgColor);
console.log(btnChangeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener('click', onClick);

function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = body.style.backgroundColor;
}
