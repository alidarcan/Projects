let numberDOM = document.getElementById("number");
const fibNumberDOM = document.getElementById("fibNumber");

numberDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    calcFib(numberDOM.value);
  }
});
function calcFib(n) {
  let fibArr = [0];
  if (n < 1) {
    fibArr = "Error! Type number correctly.";
  } else if (n > 1) {
    fibArr.push(1);
    while (fibArr.length < n) {
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
  }
  fibNumberDOM.innerHTML = fibArr;
}
