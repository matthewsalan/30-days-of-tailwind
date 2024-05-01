"use-strict";

const notifications = document.querySelector(".notifications");
const btnRead = document.querySelector(".btn-read");
const unread = document.querySelectorAll(".unread");

btnRead.addEventListener("click", _markAllAsRead);

function _markAllAsRead() {
  notifications.textContent = 0;
  unread.forEach((notification) => {
    notification.classList.remove("bg-[--very-light-gray-blue]");
    notification.querySelector("svg").remove();
  });
}
