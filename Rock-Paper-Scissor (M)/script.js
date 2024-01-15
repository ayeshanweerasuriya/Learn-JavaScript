const prompt = require("prompt-sync")();

const options = ["Rock", "Paper", "Scissor"];

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = options[randomNumber];

console.log("Welcome to Rock Paper Scissor Game ---->");
console.log(`\n 1. Rock \n 2. Paper \n 3. Scissor \n`);
const userChoice = parseInt(prompt("User Choice: "));

const userResult = options[userChoice - 1];

console.log(`\n--------------------------------------->`);
console.log("Your Choice: " + userResult);
console.log(`Computer Choice: ${computerChoice}\n`);

if (userResult === computerChoice) {
  console.log("It is a Tie!");
} else if (
  (userResult === "Rock" && computerChoice === "Scissor") ||
  (userResult === "Paper" && computerChoice === "Rock") ||
  (userResult === "Scissor" && computerChoice === "Paper")
) {
  console.log("Congratulations! You Win!");
} else {
  console.log("Sorry! You Lose!");
}
