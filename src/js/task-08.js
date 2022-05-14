const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', formOnSubmit);

function formOnSubmit(event) {
  console.log(event);
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const formMail = formElements.email.value;
  const formPassword = formElements.password.value;

  if (formMail === '' || formPassword === '') {
    alert(`Всі поля повинні бути заповнені!`);
  }
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('formOnSubmit - name:', name);
    console.log('formOnSubmit - value:', value);
  });
  document.querySelector('.login-form').reset();
}
