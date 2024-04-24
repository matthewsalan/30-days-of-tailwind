"use-strict";

const btnNotify = document.querySelector(".btn-notify");
const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const notice = document.querySelector(".notice");

btnNotify.addEventListener("click", function (e) {
  e.preventDefault();
  if (!emailRegex.test(emailInput.value)) return;
  toggleSuccessFormState();
});

btnNotify.addEventListener("mouseenter", function () {
  if (!emailRegex.test(emailInput.value)) {
    toggleErrorFormState();
    btnNotify.addEventListener("mouseleave", resetFormState);
  }
});

function toggleErrorFormState() {
  if (notice.classList.contains("text-green-600")) {
    notice.classList.toggle("text-green-600");
    notice.textContent = null;
    notice.classList.toggle("invisible");
  }

  emailInput.classList.toggle("border-[--pale-blue]");
  emailInput.classList.toggle("border-[--light-red]");
  notice.classList.toggle("text-[--light-red]");
  notice.classList.toggle("invisible");
  notice.textContent = "Please provide a valid email address";
}

function toggleSuccessFormState() {
  notice.classList.toggle("text-green-600");
  notice.classList.toggle("invisible");
  notice.textContent = "Thank you!  We'll let you know when we launch.";
  form.reset();
  btnNotify.removeEventListener("mouseleave", resetFormState);
}

function resetFormState() {
  if (emailInput.classList.contains("border-[--light-red]")) {
    emailInput.classList.toggle("border-[--light-red]");
    emailInput.classList.toggle("border-[--pale-blue]");
    notice.classList.toggle("text-[--light-red]");
  }
  notice.classList.toggle("invisible");
  notice.textContent = null;
}
