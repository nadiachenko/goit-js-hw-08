
import throttle from 'lodash.throttle';
const refs = {
    emailField: document.querySelector('[name="email"]'),
    messageField: document.querySelector('[name="message"]'),
    formEl: document.querySelector('.feedback-form')
}
const STORAGE_KEY = 'feedback-form-state';
const data = {};

addSavedData();
refs.formEl.addEventListener('input', throttle(formData, 500));

function formData(e) {

    data[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))

}
function addSavedData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        refs.emailField.value = savedData.email;
        refs.messageField.value = savedData.message;
    }
}
refs.formEl.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    const submittedData = {};
    submittedData.email = refs.emailField.value;
    submittedData.message = refs.messageField.value;
    console.log(submittedData)
    refs.formEl.reset();

    localStorage.removeItem(STORAGE_KEY)
}
