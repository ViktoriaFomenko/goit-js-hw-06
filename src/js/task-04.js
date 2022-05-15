const decrementListenerBtn = document.querySelector('button[data-action="decrement"]');
const incrementListenerBtn = document.querySelector('button[data-action="increment"]');
const number = document.querySelector(`#value`);

let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  number.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  number.textContent = counterValue;
}

decrementListenerBtn.addEventListener(`click`, onDecrementBtnClick);
incrementListenerBtn.addEventListener(`click`, onIncrementBtnClick);
