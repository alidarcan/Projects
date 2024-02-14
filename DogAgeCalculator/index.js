var yourAgeDOM = document.getElementById("yourAge");
var buttonDogAgeDOM = document.getElementById("buttonDogAge");
var dogAgeSelectDOM = document.getElementById("dogAgeSelect");

yourAgeDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    buttonDogAgeDOM.click();
  }
});

function dogOrHumanSelect(selectedOption) {
  switch (selectedOption) {
    case "1":
      yourAgeDOM.placeholder = "Your Age?";
      break;
    case "2":
      yourAgeDOM.placeholder = "Your Dog Age?";
      break;
  }
}
function dogAgeCalculate() {
  var ageInput = yourAgeDOM.value;
  if (ageInput == "") {
    var dogAgeMessage = "Please type age.";
  } else if (dogAgeSelectDOM.value == 1) {
    var ageResultCalculated = (ageInput - 21) / 4 + 2;
    var dogAgeMessage =
      "Your age is " +
      ageInput +
      ", and your dog age is " +
      ageResultCalculated;
  } else if (dogAgeSelectDOM.value == 2) {
    var ageResultCalculated = (ageInput - 2) * 4 + 21;
    var dogAgeMessage =
      "Your dog's age is " +
      ageInput +
      ", and your dog's human age is " +
      ageResultCalculated;
  }
  document.getElementById("dogAgeResult").innerHTML = dogAgeMessage;
  yourAgeDOM.value = "";
}
