"use-strict";

import { formBody } from "./literals.js";

const formSection = document.querySelectorAll(".form--section");

window.addEventListener("DOMContentLoaded", _insertForm);

function _insertForm() {
  formSection.forEach((section) =>
    section.insertAdjacentHTML("afterbegin", formBody())
  );
}
