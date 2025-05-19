const options = ["rock", "paper", "scissors"];
let playerPoints = 0;
let machinePoints = 0;
let round = 1;

const roundDisplay = document.getElementById("round");
const playerPointsDisplay = document.getElementById("playerPoints");
const machinePointsDisplay = document.getElementById("machinePoints");

const displayResult = document.getElementById("displayResult");
const result = document.getElementById("result");

roundDisplay.textContent = round;
playerPointsDisplay.textContent = playerPoints;
machinePointsDisplay.textContent = machinePoints;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", () => {
    const playerChoice = button.value;
    const machineChoice = options[Math.floor(Math.random() * 3)];

    if (playerChoice === machineChoice) {
      result.textContent = "EMPATE!";
      playerPoints += 0;
      machinePoints += 0;

    } else if (playerChoice === "rock" && machineChoice === "scissors") {
      result.textContent = "VOCÊ VENCEU!";
      playerPoints++;
    } else if (playerChoice === "paper" && machineChoice === "rock") {
      result.textContent = "VOCÊ VENCEU!";
      playerPoints++;
    } else if (playerChoice === "scissors" && machineChoice === "paper") {
      result.textContent = "VOCÊ VENCEU!";
      playerPoints++;

    } else {
      result.textContent = "DERROTA!";
      machinePoints++;
    }

    round++;

    roundDisplay.textContent = round;
    playerPointsDisplay.textContent = playerPoints;
    machinePointsDisplay.textContent = machinePoints;
  });
});