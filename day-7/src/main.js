"use-strict";

import {
  personalForm,
  planForm,
  addOnsForm,
  summaryForm,
  thankYouForm,
} from "./literals.js";

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
let currentStepNumber = document.querySelector(".current--step");
let currentPlanElement;
let currentAddOns;

window.addEventListener("DOMContentLoaded", function () {
  _insertForm();
  _addButtonEventListeners();
});

function _addButtonEventListeners() {
  document
    .querySelectorAll(".btn--next")
    .forEach((btn) => btn.addEventListener("click", _nextStep));

  if (formStep == "plan") {
    [".btn--arcade", ".btn--pro", ".btn--advanced"].forEach((btn) => {
      let element = document.querySelector(btn);
      element.addEventListener("click", function () {
        if (currentPlanElement) _applyPlanBtnStyles(currentPlanElement);
        _applyPlanBtnStyles(element);
        currentPlanElement = element;
      });
    });
  }
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
      _updateStepNumber(document.querySelector(".step--3"));
      break;
    case "addOns":
      _updateAddOnInfo(document.querySelector(".step--three"));
      formStep = "summary";
      _insertForm(summaryForm());
      _updateStepNumber(document.querySelector(".step--4"));
      break;
    case "summary":
      _insertForm(thankYouForm());
      break;
    default:
      _updatePersonalInfo(document.querySelector(".step--one"));
      formStep = "plan";
      _insertForm(planForm());
      _updateStepNumber(document.querySelector(".step--2"));
      break;
  }
  currentStepNumber = document.querySelector(".current--step");
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

function _applyPlanBtnStyles(element) {
  element.classList.toggle("border-[--light-gray]");
  element.classList.toggle("border-[--purplish-blue]");
  element.classList.toggle("bg-[--alabaster]");
}

function _updateStepNumber(element) {
  currentStepNumber.classList.toggle("bg-[--light-blue]");
  currentStepNumber.classList.toggle("text-white");
  currentStepNumber.classList.toggle("current--step");
  element.classList.toggle("bg-[--light-blue]");
  element.classList.toggle("text-white");
  element.classList.toggle("current--step");
}
