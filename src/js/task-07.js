const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('input', controlling);

function controlling() {
  text.style.fontSize = range.value + 'px';
}
