const prompt = require("prompt-sync")();

const options = ["Rock", "Paper", "Scissor"];

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = options[randomNumber];

console.log("Welcome to Rock Paper Scissor Game ---->");

let userChoice = 0;

while (true) {
  console.log(`\n 1. Rock \n 2. Paper \n 3. Scissor \n 4. Exit \n`);
  userChoice = parseInt(prompt("User Choice: "));

  if (userChoice >= 1 && userChoice <= 3) {
    break;
  } else if (userChoice === 4) {
    console.log("Exiting the game...");
    process.exit();
  } else {
    console.log("Invalid choice. Please choose a number between 1 and 4.");
  }
}

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
