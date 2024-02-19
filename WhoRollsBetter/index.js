let dice1DOM = document.querySelector(".img1");
let dice2DOM = document.querySelector(".img2");
let infoDOM = document.querySelector("h1");
let p1DOM = document.querySelector("#p1");
let p2DOM = document.querySelector("#p2");
let buttonDOM = document.querySelector("button");

function roll() {
  let dice1Number = Math.floor(Math.random() * 6 + 1);
  let dice2Number = Math.floor(Math.random() * 6 + 1);

  dice1DOM.setAttribute("src", "./images/dice" + dice1Number + ".png");
  dice2DOM.setAttribute("src", "./images/dice" + dice2Number + ".png");

  if (dice1Number === dice2Number) {
    infoDOM.textContent = "It's a Tie.";
  } else if (dice1Number > dice2Number) {
    infoDOM.textContent = "🎲You Win!";
    p1DOM.innerHTML = parseInt(p1DOM.innerHTML) + 1;
  } else {
    infoDOM.textContent = "You Lose!🎲";
    p2DOM.innerHTML = parseInt(p2DOM.innerHTML) + 1;
  }
  if (p1DOM.innerHTML == 10 || p2DOM.innerHTML == 10) {
    endGame();
  }
}

function endGame() {
  buttonDOM.removeEventListener("click", roll);
  buttonDOM.addEventListener("click", newGame);
  buttonDOM.innerText = "New Game";
}

function newGame() {
  p1DOM.innerHTML = "0";
  p2DOM.innerHTML = "0";
  buttonDOM.innerText = "🎲";
  infoDOM.textContent = "Who Rolls Better?";
  buttonDOM.removeEventListener("click", newGame);
  buttonDOM.addEventListener("click", roll);
}
newGame();
