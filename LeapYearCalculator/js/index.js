let yearDOM = document.getElementById("year");
const isLeapYearDOM = document.getElementById("isLeapYear");

yearDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    calcYear();
  }
});
function calcYear() {
  let year = yearDOM.value;

  if (year % 400 === 0) {
    isLeapYearDOM.innerHTML = year + " is a leap year.";
  } else if (year % 100 === 0) {
    isLeapYearDOM.innerHTML = year + " is not a leap year.";
  } else if (year % 4 === 0) {
    isLeapYearDOM.innerHTML = year + " is a leap year.";
  } else {
    isLeapYearDOM.innerHTML = year + " is not a leap year.";
  }
}
