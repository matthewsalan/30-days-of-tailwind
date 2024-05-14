"use-strict";

import { personalForm, planForm } from "./literals.js";

const userObj = {
  personal: {
    name: null,
    email: null,
    phone: null,
  },
  plan: {
    type: null,
    level: null,
    addOns: [],
  },
};

const formSection = document.querySelectorAll(".form--section");
const btnNext = document.querySelectorAll(".btn--next");
let formStep = "personal";

window.addEventListener("DOMContentLoaded", _insertForm);

btnNext.forEach((btn) => btn.addEventListener("click", _nextStep));

function _insertForm() {
  formSection.forEach((section) =>
    section.insertAdjacentHTML("afterbegin", personalForm())
  );
}

function _nextStep() {
  switch (formStep) {
    case "plan":
      addOns();
      break;
    case "addOns":
      confirmation();
    default:
      _updatePersonalInfo(document.querySelector(".step--one"));
      // selectPlan();
      break;
  }
}

function _updatePersonalInfo(stepOne) {
  let entries = Object.fromEntries(new FormData(stepOne));
  userObj.personal.name = entries.name;
  userObj.personal.email = entries.email;
  userObj.personal.phone = entries.phone;
}
