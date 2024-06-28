const prompt = require("prompt-sync")();

console.log("=======================================");
console.log("|        Welcome To The System        |");
console.log("=======================================");

let name = "";
let age = "";

let loopContinue = true;
do {
  let innerLoop = true;
  do {
    name = prompt("Your name: ");

    if (name.length < 8) {
      console.log("name characters should be more than 8");
    } else {
      innerLoop = false;
    }
  } while (innerLoop);

  let secondLoop = true;
  do {
    age = prompt("Your age: ");

    if (Number.parseInt(age) < 8) {
      console.log("You should be older than 8");
    } else {
      secondLoop = false;
    }
  } while (secondLoop);

  loopContinue = false;
} while (loopContinue);

console.log(`Your name is ${name}, and you are ${age} year's old.`);

const conAge = Number.parseInt(age);

console.log(`And in 10 years your age will be ${conAge + 10}`);
