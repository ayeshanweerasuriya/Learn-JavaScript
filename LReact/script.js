const prompt = require("prompt-sync")();

// const name = prompt("Type your name: ");
// const age = prompt("Type your age: ");

const isTalk = () => {
  console.log(`My name is ${person.name}`);
  console.log(`I am ${person.age} years old`);
};

// const person = {
//   name,
//   age,
//   func: isTalk,
// };

// person.func();

const names = ["Ayeshan", "Melani", "James", "Cobolt"];

// const result = names.map((element) => {
//   return element + "1";
// });

// console.log(result);

const names2 = [...names, "hutto"];

// names2.forEach((element) => {
//   console.log(element + "1");
// });

// names.filter();
// names.reduce();

const filter = names.filter((element) => {
  return element.length != 6;
});

console.log(filter);
