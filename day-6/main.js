"use-strict";

const btnBookmark = document.querySelector(".btn--bookmark");
const iconBookmark = document.querySelector(".bookmark-icon");
const bookMarkCircle = document.querySelector(".bookmark-circle");
const bookmarkText = document.querySelector(".bookmark-text");
const btnRewards = document.querySelectorAll(".btn--reward");
const btnRadio = document.querySelector(".btn--radio");
const btnModalClose = document.querySelector(".btn--modal--close");
const pledgeModal = document.querySelector(".pledge--modal");
const dollarAmount = document.getElementById("dollar--amount");
const form = document.querySelector(".form");
const pledgeSection = document.querySelector(".pledge--section");

btnBookmark.addEventListener("click", _bookmark);
btnRewards.forEach((reward) => reward.addEventListener("click", _openModal));
btnModalClose.addEventListener("click", _closeModal);
btnRadio.addEventListener("click", _markAsSelected);

function _bookmark() {
  btnBookmark.classList.add("text-[--dark-cyan]");
  btnBookmark.classList.remove("text-[--dark-gray]");
  bookmarkText.textContent = "Bookmarked";
  iconBookmark.classList.add("svg-bookmark");
  bookMarkCircle.classList.add("svg-circle");
}

function _openModal() {
  pledgeModal.classList.remove("hidden");
}

function _closeModal() {
  pledgeModal.classList.add("hidden");
  form.reset();
  btnRadio.checked = false;
  pledgeSection.classList.add("hidden");
}

function _markAsSelected() {
  dollarAmount.value = "25";
  pledgeSection.classList.remove("hidden");
}
