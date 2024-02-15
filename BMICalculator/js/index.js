let weightDOM = document.getElementById("weight");
const heightDOM = document.getElementById("height");
const BMIDOM = document.getElementById("BMI");

heightDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    calcBMI();
  }
});
weightDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // ekstra
    calcBMI();
  }
});
function calcBMI() {
  let weight = weightDOM.value;
  let height = heightDOM.value;
  let BMI = weight / (height * height);
  BMI = Math.floor(BMI * 100) / 100;
  console.log(weight);
  console.log(height);

  if(BMI >= 35){
    BMIDOM.innerHTML = "Your BMI is " + BMI + ". You are extremely obese.";
  } else if(BMI >= 30 && BMI < 35){
    BMIDOM.innerHTML = "Your BMI is " + BMI + ". You are obese.";
  } else if(BMI >= 25 && BMI < 30){
    BMIDOM.innerHTML = "Your BMI is " + BMI + ". You are overweight.";
  } else if(BMI >= 18.5 && BMI < 25){
    BMIDOM.innerHTML = "Your BMI is " + BMI + ". You are normal.";
  } else if(BMI < 18.5){
    BMIDOM.innerHTML = "Your BMI is " + BMI + ". You are underweight.";
  } else{
    BMIDOM.innerHTML = "You've made a mistake. Enter correct values.";
  }
}
