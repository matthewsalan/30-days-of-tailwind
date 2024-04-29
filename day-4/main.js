"use-strict";

const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const notice = document.querySelector(".notice");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  _handleFormSubmission();
});

function _handleFormSubmission() {
  let entries = Object.fromEntries(new FormData(form));
  if (_dirtyForm()) _resetFormState();

  if (_validEmail(entries)) {
    _toggleErrorFormState();
    notice.textContent = "Valid email required";
  } else {
    _toggleSuccessFormState();
  }
}

function _validEmail(entries) {
  return entries.email === "" || !emailRegex.test(emailInput.value);
}

function _dirtyForm() {
  return notice.classList.contains("text-[--tomato]");
}

function _toggleErrorFormState() {
  notice.classList.toggle("text-[--tomato]");
}

function _toggleSuccessFormState() {
  form.reset();
  _displaySuccessModal();
}
