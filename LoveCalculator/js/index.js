let yNameDOM = document.getElementById("yName");
const vNameDOM = document.getElementById("vName");
const loveDOM = document.getElementById("love");

vNameDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    calcLove();
  }
});
function calcLove() {
  let yName = yNameDOM.value;
  let vName = vNameDOM.value;
  let love = Math.floor(Math.random() * 100) + 1;

  if (love >= 70) {
    loveDOM.innerHTML =
      "Your love score is " +
      love +
      "%. You love each other like Kanye loves Kanye.";
  } else if (love <= 70 && love > 30) {
    loveDOM.innerHTML =
      "Your love score is " +
      love +
      "%.";
  } else {
    loveDOM.innerHTML =
      "Your love score is " +
      love +
      "%. You go together like oil and water.";
  }
}
