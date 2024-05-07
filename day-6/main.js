"use-strict";

const body = document.querySelector("body");
const btnBackProject = document.querySelector(".btn--back--project");
const btnBookmark = document.querySelector(".btn--bookmark");
const btnMobileBookmark = document.querySelector(".btn--mobile--bookmark");
const iconBookmark = document.querySelector(".bookmark-icon");
const bookMarkCircle = document.querySelector(".bookmark-circle");
const bookmarkText = document.querySelector(".bookmark-text");
const btnRewards = document.querySelectorAll(".btn--reward");
const radioButtons = document.querySelectorAll(".btn--radio");
const btnModalClose = document.querySelector(".btn--modal--close");
const pledgeModal = document.querySelector(".pledge--modal");
const pledgeForms = document.querySelectorAll(".form");
const pledgeSections = document.querySelectorAll(".pledge--section");
const rewardBorders = document.querySelectorAll(".reward--border");
let currentSelectedReward;

btnBackProject.addEventListener("click", _openModal);

btnBookmark.addEventListener("click", _bookmark);
btnMobileBookmark.addEventListener("click", _bookmark);

btnRewards.forEach((reward) =>
  reward.addEventListener("click", function (e) {
    _openModal();
    _markAsSelected(e.currentTarget.id);
  })
);

btnModalClose.addEventListener("click", _closeModal);

radioButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    _markAsSelected(btn.id.split("-")[1]);
  })
);

function _bookmark() {
  btnBookmark.classList.toggle("text-[--dark-cyan]");
  btnBookmark.classList.toggle("text-[--dark-gray]");
  bookmarkText.textContent =
    bookmarkText.textContent == "Bookmark" ? "Bookmarked" : "Bookmark";
  iconBookmark.classList.toggle("svg-bookmark");
  bookMarkCircle.classList.toggle("svg-circle");
}

function _openModal() {
  body.classList.add("fixed");
  body.classList.remove("relative");
  pledgeModal.classList.remove("hidden");
}

function _closeModal() {
  body.classList.add("relative");
  body.classList.remove("fixed");
  pledgeModal.classList.add("hidden");
  pledgeForms.forEach((form) => form.reset());
  radioButtons.forEach((btn) => (btn.checked = false));
  pledgeSections.forEach((section) => section.classList.add("hidden"));
  rewardBorders.forEach((border) => {
    border.classList.add("border-slate-300");
    border.classList.remove("border-[--moderate-cyan]");
  });
}

function _markAsSelected(id) {
  if (currentSelectedReward) _removeCurrentSelectedReward();
  let radio = document.getElementById(`radio-${id}`);
  radio.checked = true;
  currentSelectedReward = radio.parentElement.closest(".reward--border");
  let pledgeSection = currentSelectedReward.querySelector(".pledge--section");
  pledgeSection.classList.remove("hidden");
  currentSelectedReward.classList.remove("border-slate-300");
  currentSelectedReward.classList.add("border-[--moderate-cyan]");
}

function _removeCurrentSelectedReward() {
  let radio = currentSelectedReward.querySelector("input[type=radio]");
  radio.checked = false;
  let pledgeSection = currentSelectedReward.querySelector(".pledge--section");
  pledgeSection.classList.add("hidden");
  currentSelectedReward.classList.add("border-slate-300");
  currentSelectedReward.classList.remove("border-[--moderate-cyan]");
}
