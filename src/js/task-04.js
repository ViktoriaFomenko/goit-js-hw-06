const decrementListenerBtn = document.querySelector('button[data-action="decrement"]');
const incrementListenerBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  document.querySelector(`#value`).textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  document.querySelector(`#value`).textContent = counterValue;
}

decrementListenerBtn.addEventListener(`click`, onDecrementBtnClick);
incrementListenerBtn.addEventListener(`click`, onIncrementBtnClick);
