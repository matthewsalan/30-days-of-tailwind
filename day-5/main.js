"use-strict";

const notifications = document.querySelector(".notifications");
const btnRead = document.querySelector(".btn-read");
const unread = document.getElementsByClassName("unread");

btnRead.addEventListener("click", _markAllAsRead);

Array.from(unread).map((notification) => {
  notification.addEventListener(
    "click",
    (notification.markAsRead = function () {
      _markAsRead(notification);
    }),
    { once: true }
  );
});

function _markAllAsRead() {
  notifications.textContent = 0;
  btnRead.classList.add("hidden");
  Array.from(unread).forEach((notification) => {
    _removeStyles(notification);
    notification.removeEventListener("click", notification.markAsRead);
  });
}

function _markAsRead(notification) {
  notifications.textContent -= 1;
  _removeStyles(notification);
  console.log(notifications.textContent);
  if (notifications.textContent === "0") btnRead.classList.add("hidden");
}

function _removeStyles(notification) {
  notification.classList.remove("bg-[--very-light-gray-blue]");
  notification.querySelector("svg").remove();
  notification.classList.remove("unread");
}
