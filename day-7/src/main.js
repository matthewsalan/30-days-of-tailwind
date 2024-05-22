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
    type: "mo",
    level: null,
    addOns: [],
  },
};

const monthlyPlan = {
  type: "mo",
  costs: [9, 12, 15],
  addOns: [1, 2, 2],
};

const yearlyPlan = {
  type: "yr",
  costs: [90, 120, 150],
  addOns: [10, 20, 20],
};

const formSection = document.querySelectorAll(".form--section");
let formStep = "personal";
let currentStepNumber = document.querySelectorAll(".current--step");
let currentPlanElement;
const mobileBackBtn = document.querySelector(".mobile--back--btn");

window.addEventListener("DOMContentLoaded", function () {
  _insertForm();
  _addButtonEventListeners();
});

function _addButtonEventListeners() {
  document
    .querySelectorAll(".btn--next")
    .forEach((btn) => btn.addEventListener("click", _nextStep));

  document
    .querySelectorAll(".btn--back")
    .forEach((btn) => btn.addEventListener("click", _backStep));

  if (formStep == "plan") {
    [".btn--arcade", ".btn--pro", ".btn--advanced"].forEach((btn) => {
      let element = document.querySelector(btn);
      element.addEventListener("click", function () {
        currentPlanElement = document.querySelector(".current--plan");
        if (currentPlanElement) _applyPlanBtnStyles(currentPlanElement);
        _updatePlanLevel(element);
      });
    });

    document
      .querySelector(".plan--toggle")
      .addEventListener("click", _togglePlanType);
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
      formStep = "addOns";
      _insertForm(
        addOnsForm(
          userObj.plan.type === "mo"
            ? Array(monthlyPlan, userObj.plan)
            : Array(yearlyPlan, userObj.plan)
        )
      );
      _updateStepNumber(document.querySelectorAll(".step--3"));
      break;
    case "addOns":
      _updateAddOnInfo(document.querySelector(".step--three"));
      formStep = "summary";
      _insertForm(summaryForm());
      _updateStepNumber(document.querySelectorAll(".step--4"));
      break;
    case "summary":
      _insertForm(thankYouForm());
      break;
    default:
      _updatePersonalInfo(document.querySelector(".step--one"));
      formStep = "plan";
      _insertForm(
        planForm(
          userObj.plan.type === "mo"
            ? Array(monthlyPlan, userObj.plan)
            : Array(yearlyPlan, userObj.plan)
        )
      );
      _updateStepNumber(document.querySelectorAll(".step--2"));
      break;
  }
  currentStepNumber = document.querySelectorAll(".current--step");
  _toggleMobileBackBtn();
}

function _backStep() {
  switch (formStep) {
    case "summary":
      formStep = "addOns";
      _insertForm(
        addOnsForm(
          userObj.plan.type === "mo"
            ? Array(monthlyPlan, userObj.plan)
            : Array(yearlyPlan, userObj.plan)
        )
      );
      _updateStepNumber(document.querySelectorAll(".step--3"));
      break;
    case "addOns":
      formStep = "plan";
      _insertForm(
        planForm(
          userObj.plan.type === "mo"
            ? Array(monthlyPlan, userObj.plan)
            : Array(yearlyPlan, userObj.plan)
        )
      );
      _updateStepNumber(document.querySelectorAll(".step--2"));
      break;
    default:
      formStep = "personal";
      _insertForm(personalForm());
      _updateStepNumber(document.querySelectorAll(".step--1"));
      break;
  }
  currentStepNumber = document.querySelectorAll(".current--step");
  _toggleMobileBackBtn();
}

function _updatePersonalInfo(stepOne) {
  let entries = Object.fromEntries(new FormData(stepOne));
  userObj.personal.name = entries.name;
  userObj.personal.email = entries.email;
  userObj.personal.phone = entries.phone;
}

function _updatePlanLevel(element) {
  userObj.plan.level = element.querySelector(".label--plan").textContent;
  _applyPlanBtnStyles(element);
}

function _updateAddOnInfo(stepThree) {
  let entries = Object.fromEntries(new FormData(stepThree));
  userObj.plan.addOns = entries.addOns;
}

function _applyPlanBtnStyles(element) {
  element.classList.toggle("current--plan");
  element.classList.toggle("border-[--light-gray]");
  element.classList.toggle("border-[--purplish-blue]");
  element.classList.toggle("bg-[--alabaster]");
}

function _updateStepNumber(elements) {
  currentStepNumber.forEach((num) => {
    num.classList.toggle("bg-[--light-blue]");
    num.classList.toggle("text-white");
    num.classList.toggle("current--step");
  });
  elements.forEach((element) => {
    element.classList.toggle("bg-[--light-blue]");
    element.classList.toggle("text-white");
    element.classList.toggle("current--step");
  });
}

function _toggleMobileBackBtn() {
  if (formStep === "personal") {
    mobileBackBtn.classList.add("hidden");
  } else {
    mobileBackBtn.classList.remove("hidden");
  }
}

function _togglePlanType() {
  let planSlider = document.querySelector(".plan--slider");
  planSlider.classList.toggle("translate-x-5");
  if (userObj.plan.type === "mo") {
    userObj.plan.type = "yr";
  } else {
    userObj.plan.type = "mo";
  }
  _setPlanType();
}

function _setPlanType() {
  let monthly = document.querySelector(".label--monthly");
  let yearly = document.querySelector(".label--yearly");
  if (userObj.plan.type === "mo") {
    _toggleMonthly(monthly, yearly);
  } else {
    _toggleYearly(monthly, yearly);
  }
}

function _toggleYearly(monthly, yearly) {
  monthly.classList.add("text-[--cool-gray]");
  monthly.classList.remove("text-[--marine-blue]");
  yearly.classList.remove("text-[--cool-gray]");
  yearly.classList.add("text-[--marine-blue]");
}

function _toggleMonthly(monthly, yearly) {
  monthly.classList.remove("text-[--cool-gray]");
  monthly.classList.add("text-[--marine-blue]");
  yearly.classList.add("text-[--cool-gray]");
  yearly.classList.remove("text-[--marine-blue]");
}
