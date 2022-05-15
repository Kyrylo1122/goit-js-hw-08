const throttle = require('lodash.throttle');

const ref = {
  form: document.querySelector('form'),
  input: document.querySelector('[name="email"]'),
  textArea: document.querySelector('[name="message"]'),
};
outputLocalStorageData();
const formData = {};

ref.form.addEventListener('input', throttle(setLocaleStorageData, 500));

ref.form.addEventListener('submit', submitLocalStorage);

function submitLocalStorage(e) {
  e.preventDefault();
  if (ref.input.value === '' || ref.textArea.value === '') {
    alert('Fill all fields, please');
    return;
  }
  e.target.reset();
  console.log(formData);
  localStorage.clear();
}

function setLocaleStorageData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function outputLocalStorageData() {
  const localStorageData = localStorage.getItem('feedback-form-state');

  if (localStorageData) {
    const parsedSettings = JSON.parse(localStorageData);
    if (parsedSettings.email) {
      ref.input.value = parsedSettings.email;
    }
    if (parsedSettings.message) {
      ref.textArea.value = parsedSettings.message;
    }
  }
}
