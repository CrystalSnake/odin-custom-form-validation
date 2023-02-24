const form = document.forms['example'];
const email = form.elements['email'];
const emailError = document.querySelector('#email ~ .invalid');
const password = form.elements['pass'];
const passwordError = document.querySelector('#pass ~ .invalid');
const confirmPass = form.elements['confirm'];
const confirmError = document.querySelector('#confirm ~ .invalid');

function validateEmail(input) {
  return;
}

function validatePassword(input) {
  return;
}

function validateConfirm(input) {
  return;
}

function validateForm() {
  validateEmail(email);
  validatePassword(password);
  validateConfirm(confirmPass);
  if (form.checkValidity()) {
    console.log('Success!');
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
});

email.addEventListener('focusout', () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email required';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email';
  } else {
    emailError.textContent = '';
  }
});

password.addEventListener('focusout', () => {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password required';
  } else if (password.validity.tooShort) {
    passwordError.textContent = 'Minimum length 10 characters';
  } else if (password.validity.tooLong) {
    passwordError.textContent = 'Maximum length 18 characters';
  } else {
    passwordError.textContent = '';
  }
});

confirmPass.addEventListener('input', () => {
  if (confirmPass.value != password.value) {
    confirmError.textContent = 'Password mismatch';
  } else {
    confirmError.textContent = '';
  }
});
