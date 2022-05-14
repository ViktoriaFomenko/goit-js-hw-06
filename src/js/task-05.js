const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);
console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener(`input`, ShowInputText);

function ShowInputText(event) {
  event.currentTarget.value === ``
    ? (outputRef.textContent = `Anonymous`)
    : (outputRef.textContent = event.currentTarget.value);
}
