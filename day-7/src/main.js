"use-strict";

import { personalForm, planForm, addOnsForm } from "./literals.js";

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
let formStep = "personal";

window.addEventListener("DOMContentLoaded", function () {
  _insertForm();
  _addButtonEventListeners();
});

function _addButtonEventListeners() {
  document
    .querySelectorAll(".btn--next")
    .forEach((btn) => btn.addEventListener("click", _nextStep));
}

function _insertForm(form) {
  if (form) _removeCurrentForm();
  formSection.forEach((section) =>
    section.insertAdjacentHTML("afterbegin", form ? form : personalForm())
  );
  _addButtonEventListeners();
}

function _removeCurrentForm() {
  formSection.forEach((section) => (section.innerHTML = null));
}

function _nextStep() {
  switch (formStep) {
    case "plan":
      _updatePlanInfo(document.querySelector(".step--two"));
      formStep = "addOns";
      _insertForm(addOnsForm());
      break;
    case "addOns":
      _updateAddOnInfo(document.querySelector(".step--three"));
      formStep = "confirmation";
      _insertForm(confirmationForm());
    default:
      _updatePersonalInfo(document.querySelector(".step--one"));
      formStep = "plan";
      _insertForm(planForm());
      break;
  }
}

function _updatePersonalInfo(stepOne) {
  let entries = Object.fromEntries(new FormData(stepOne));
  userObj.personal.name = entries.name;
  userObj.personal.email = entries.email;
  userObj.personal.phone = entries.phone;
}

function _updatePlanInfo(stepTwo) {
  let entries = Object.fromEntries(new FormData(stepTwo));
  userObj.plan.type = entries.type;
  userObj.plan.level = entries.level;
}

function _updateAddOnInfo(stepThree) {
  let entries = Object.fromEntries(new FormData(stepThree));
  userObj.plan.addOns = entries.addOns;
}
