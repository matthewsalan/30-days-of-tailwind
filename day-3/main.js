"use-strict";

const btnNotify = document.querySelector(".btn-notify");
const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const notice = document.querySelector(".notice");

btnNotify.addEventListener("click", function (e) {
  e.preventDefault();
  _handleFormSubmission();
});

function _handleFormSubmission() {
  let entries = Object.fromEntries(new FormData(form));
  if (_dirtyForm()) _resetFormState();

  if (entries.email === "") {
    _toggleErrorFormState();
    notice.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (!emailRegex.test(emailInput.value)) {
    _toggleErrorFormState();
    notice.textContent = "Please provide a valid email address";
  } else {
    _toggleSuccessFormState();
    notice.textContent = "Thank you!  We'll let you know when we launch";
  }
}

function _dirtyForm() {
  return (
    emailInput.classList.contains("border-[--light-red]") ||
    notice.classList.contains("text-green-600")
  );
}

function _toggleErrorFormState() {
  emailInput.classList.toggle("border-[--pale-blue]");
  emailInput.classList.toggle("border-[--light-red]");
  notice.classList.toggle("text-[--light-red]");
}

function _resetSuccessFormState() {
  notice.classList.toggle("text-green-600");
}

function _resetFormState() {
  if (notice.classList.contains("text-green-600")) {
    notice.classList.toggle("text-green-600");
  } else {
    _toggleErrorFormState();
  }
}

function _toggleSuccessFormState() {
  notice.classList.toggle("text-green-600");
  form.reset();
}
