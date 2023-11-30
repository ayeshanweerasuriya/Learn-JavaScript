const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const compHand = document.getElementById("computerHand");
const myHand = document.getElementById("yourHand");

const submit = document.getElementById("submit");

const displayResult = document.getElementById("displayResult");

const oArray = ["Rock", "Paper", "Scissor"];

let isSubmit = false;

let manResult;
let randomOption;

rock.addEventListener("click", () => {
  myHand.textContent = oArray[0];
  manResult = oArray[0];
});

paper.addEventListener("click", () => {
  myHand.textContent = oArray[1];
  manResult = oArray[1];
});

scissor.addEventListener("click", () => {
  myHand.textContent = oArray[2];
  manResult = oArray[2];
});

submit.addEventListener("click", () => {
  isSubmit = true;
  compDecision();
  result();
});

function compDecision() {
  if (isSubmit) {
    const randomFloat = Math.random(); // Example: 0.732

    const scaledRandom = randomFloat * oArray.length; // Example: 0.732 * 3 = 2.196

    const randomIndex = Math.floor(scaledRandom); // Example: Math.floor(2.196) = 2

    randomOption = oArray[randomIndex]; // Example: oArray[2] = "Scissor"
    compHand.textContent = randomOption;
  }
}

function result() {
  const won = "You Won Mother Fucker";
  const lost = "Such A Loser";
  const result = manResult == randomOption ? won : lost;

  displayResult.textContent = result;
}
