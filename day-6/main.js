"use-strict";

const body = document.querySelector("body");
const btnBackProject = document.querySelector(".btn--back--project");
const btnBookmark = document.querySelector(".btn--bookmark");
const iconBookmark = document.querySelector(".bookmark-icon");
const bookMarkCircle = document.querySelector(".bookmark-circle");
const bookmarkText = document.querySelector(".bookmark-text");
const btnRewards = document.querySelectorAll(".btn--reward");
const btnContinue = document.querySelectorAll(".btn--continue");
const radioButtons = document.querySelectorAll(".btn--radio");
const btnModalClose = document.querySelector(".btn--modal--close");
const pledgeModal = document.querySelector(".pledge--modal");
const pledgeForms = document.querySelectorAll(".form");
const pledgeSections = document.querySelectorAll(".pledge--section");
const rewardBorders = document.querySelectorAll(".reward--border");
const btnMobileNav = document.querySelector(".mobile--nav");
const mobileNavModal = document.querySelector(".mobile--nav--modal");
const mobileOverlay = document.querySelector(".mobile--overlay");
const btnCompleted = document.querySelector(".btn--completed");
const completedModal = document.querySelector(".completed--modal");
const completedOverlay = document.querySelector(".completed--overlay");
const totalBackers = document.querySelector(".total--backers");
const totalAmount = document.querySelector(".total--amount");
const progressBar = document.querySelector(".progress--bar");
const bambooStandRemaining = document.querySelectorAll(".bambooStandRemaining");
const blackEditionRemaining = document.querySelectorAll(
  ".blackEditionRemaining"
);
let bambooStandRemainingCount = 101;
let blackEditionRemainingCount = 64;
let currentSelectedReward;

window.addEventListener("load", _setDefaultTotals);

btnBackProject.addEventListener("click", _openModal);

btnMobileNav.addEventListener("click", _toggleMobileNav);

btnBookmark.addEventListener("click", _bookmark);

btnCompleted.addEventListener("click", function () {
  _toggleCompletedModal();
  _updateGoals();
});

btnContinue.forEach((btn) => {
  btn.addEventListener("click", _toggleCompletedModal);
});

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

mobileOverlay.addEventListener("click", function (e) {
  if (e.target.classList.contains("mobile--overlay")) _toggleMobileNav();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !pledgeModal.classList.contains("hidden"))
    _closeModal();
});

function _setDefaultTotals() {
  bambooStandRemaining.forEach(
    (stand) => (stand.textContent = bambooStandRemainingCount)
  );
  blackEditionRemaining.forEach(
    (stand) => (stand.textContent = blackEditionRemainingCount)
  );
}

function _bookmark() {
  btnBookmark.classList.toggle("text-[--dark-cyan]");
  btnBookmark.classList.toggle("text-[--dark-gray]");
  bookmarkText.textContent =
    bookmarkText.textContent == "Bookmark" ? "Bookmarked" : "Bookmark";
  iconBookmark.classList.toggle("svg-bookmark");
  bookMarkCircle.classList.toggle("svg-circle");
}

function _openModal() {
  body.classList.add("overflow-hidden");
  pledgeModal.classList.remove("hidden");
}

function _toggleMobileNav() {
  body.classList.toggle("overflow-hidden");
  mobileNavModal.classList.toggle("hidden");
}

function _closeModal() {
  body.classList.add("relative");
  body.classList.remove("overflow-hidden");
  pledgeModal.classList.add("hidden");

  if (currentSelectedReward) {
    pledgeForms.forEach((form) => form.reset());
    _removeCurrentSelectedReward();
  }
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

function _toggleCompletedModal() {
  completedModal.classList.toggle("hidden");
  pledgeModal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  _removeCurrentSelectedReward();
}

function _updateGoals() {
  totalBackers.textContent = (
    Number(totalBackers.textContent.split(",").join("")) + 1
  ).toLocaleString("en");

  let pledgeAmount =
    currentSelectedReward.querySelector(".pledge--amount")?.value;

  if (pledgeAmount) {
    totalAmount.textContent =
      "$" +
      (
        Number(totalAmount.textContent.replace("$", "").split(",").join("")) +
        Number(pledgeAmount)
      ).toLocaleString("en");

    progressBar.value += 5;

    let pledgeItem =
      currentSelectedReward.querySelector("input[type=radio]").id;
    if (pledgeItem === "radio-25") {
      bambooStandRemaining.forEach((stand) => (stand.textContent -= 1));
    } else {
      blackEditionRemaining.forEach((stand) => (stand.textContent -= 1));
    }
  }
}
