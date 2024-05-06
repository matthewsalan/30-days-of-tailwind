"use-strict";

const btnBookmark = document.querySelector(".btn--bookmark");
const iconBookmark = document.querySelector(".bookmark-icon");
const bookMarkCircle = document.querySelector(".bookmark-circle");
const bookmarkText = document.querySelector(".bookmark-text");
const btnRewards = document.querySelectorAll(".btn--reward");
const rewardModal = document.querySelector(".modal--reward");
const btnRadio = document.querySelector(".btn--radio");

btnBookmark.addEventListener("click", _bookmark);

btnRewards.forEach((reward) => reward.addEventListener("click", _openModal));

// btnRadio.addEventListener("click", _markSelectedBtn);

function _bookmark() {
  btnBookmark.classList.add("text-[--dark-cyan]");
  btnBookmark.classList.remove("text-[--dark-gray]");
  bookmarkText.textContent = "Bookmarked";
  iconBookmark.classList.add("svg-bookmark");
  bookMarkCircle.classList.add("svg-circle");
}

function _openModal() {
  rewardModal.classList.remove("hidden");
}

function _markSelectedBtn() {
  btnRadio.classList.add("bg-[--moderate-cyan]");
}
