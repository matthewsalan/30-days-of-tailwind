"use-strict";

const labelGrid = document.querySelector(".label-grid");
const chartGrid = document.querySelector(".chart-grid");

window.addEventListener("load", _insertJsonData);

function _insertJsonData() {
  let colCount = 7;

  fetch("./data.json")
    .then((response) => response.json())
    .then((json) =>
      json.reverse().forEach((element) => {
        labelGrid.insertAdjacentHTML(
          "afterbegin",
          `<div><span>${element.day}</span></div>`
        );
        chartGrid.insertAdjacentHTML(
          "afterbegin",
          `
            <div class="col-${colCount} ${_toggleColumnStyles(
            element
          )} tooltip">
              <span class="tooltiptext">$${element.amount}</span>
            </div>
          `
        );
        colCount -= 1;
      })
    );
}

function _toggleColumnStyles(element) {
  const date = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    Date.now()
  );

  return date.toLowerCase() === element.day
    ? "col-bg-current-day"
    : "col-bg-day";
}
