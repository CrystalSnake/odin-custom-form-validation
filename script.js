const form = document.forms['example'];
const email = form.elements['email'];
const emailError = document.querySelector('.email .invalid');
const password = form.elements['pass'];
const passwordError = document.querySelector('.pass .invalid');
const confirmPass = form.elements['confirm'];
const confirmError = document.querySelector('.confirm .invalid');

function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email required';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password required';
  } else if (password.validity.tooShort) {
    passwordError.textContent = 'Minimum length 10 characters';
  } else if (password.validity.tooLong) {
    passwordError.textContent = 'Maximum length 18 characters';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character';
  } else {
    passwordError.textContent = '';
  }
}

function validateConfirm() {
  if (confirmPass.value != password.value) {
    confirmError.textContent = 'Password mismatch';
  } else {
    confirmError.textContent = '';
  }
}

email.addEventListener('focusout', () => validateEmail());
password.addEventListener('input', () => validatePassword());
confirmPass.addEventListener('input', () => validateConfirm());

function validateForm() {
  validateEmail(email);
  validatePassword(password);
  validateConfirm(confirmPass);
  if (form.checkValidity() && confirmPass.value === password.value) {
    alert('Success!');
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
});
