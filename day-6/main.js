"use-strict";

const btnBookmark = document.querySelector(".btn-bookmark");
const iconBookmark = document.querySelector(".bookmark-icon");
const bookMarkCircle = document.querySelector(".bookmark-circle");
const bookmarkText = document.querySelector(".bookmark-text");

btnBookmark.addEventListener("click", _bookmark);

function _bookmark() {
  btnBookmark.classList.add("text-[--dark-cyan]");
  btnBookmark.classList.remove("text-[--dark-gray]");
  bookmarkText.textContent = "Bookmarked";
  iconBookmark.classList.add("svg-bookmark");
  bookMarkCircle.classList.add("svg-circle");
}
