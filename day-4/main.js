"use-strict";

const btnSubmit = document.querySelector(".btn-submit");
const btnDismiss = document.querySelector(".btn-dismiss");
const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const modalEmail = document.querySelector(".modal-email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const notice = document.querySelector(".notice");
const successModal = document.querySelector(".success-modal");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  _handleFormSubmission();
});

btnDismiss.addEventListener("click", _toggleSuccessModal);

emailInput.addEventListener("input", function () {
  if (emailRegex.test(emailInput.value)) {
    _validFormState();
  } else {
    _toggleFormError();
  }
});

function _handleFormSubmission() {
  emailRegex.test(emailInput.value) ? _toggleFormSuccess() : _toggleFormError();
}

function _toggleFormSuccess() {
  modalEmail.textContent = emailInput.value;
  _toggleSuccessModal();
  form.reset();
}

function _toggleSuccessModal() {
  setTimeout(() => {
    successModal.classList.toggle("modal-hidden");
    successModal.classList.toggle("modal-show");
  }, 300);
}

function _toggleFormError() {
  notice.classList.add("notice-error");
  notice.textContent = "Valid email required";
  emailInput.classList.add("focus-visible:outline-[--tomato]");
  emailInput.classList.add("form-error");
}
function _validFormState() {
  notice.classList.remove("notice-error");
  notice.textContent = null;
  emailInput.classList.remove("focus-visible:outline-[--tomato]");
  emailInput.classList.remove("form-error");
}
