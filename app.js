let userSc = 0;
let comSc = 0;

const userScore = document.getElementById("user");
const compScoreDisplay = document.getElementById("comp");
const choices = document.querySelectorAll(".choice");
let reset = document.querySelector(".rst")

const resetGame = () => {
  userSc = 0;
 comSc = 0;
 updateScores();
      document.getElementById("win").textContent = " ";
}
reset.addEventListener("click", resetGame)
const updateScores = () => {
    userScore.textContent = userSc;
    compScoreDisplay.textContent = comSc;
};
const Computer = () => {
  const opt = ["rock", "paper", "scissors"];
  const rand = Math.floor(Math.random() * 3);
  return opt[rand];
};
const draw = () => {
  console.log("match draw");
      document.getElementById("win").textContent = "Match Draw !";
};
const Play = (selId) => {
  console.log("user choice =", selId);
  const ComputerChoice = Computer();
  console.log("Computer choice =", ComputerChoice);
  if (ComputerChoice === selId) {
    draw();
  } else if (
    (selId === "rock" && ComputerChoice === "paper") ||
    (selId === "paper" && ComputerChoice === "scissors") ||
    (selId === "scissors" && ComputerChoice === "rock")
  ) {
    comSc++;
    document.getElementById("win").textContent = "Computer Win !";
    console.log("computer win");
  } else {
        document.getElementById("win").textContent = "User Win !";
    userSc++;
    console.log("User Win");
  }
  updateScores()
}

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const selId = choice.getAttribute("id");
    Play(selId);
  });
});
