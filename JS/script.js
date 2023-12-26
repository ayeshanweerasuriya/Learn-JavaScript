const prompt = require("prompt-sync")();

const personList = [];

const addPerson = (fname, lName, age, gender, isAlive) => {
  let person = {
    fName: fname,
    lName: lName,
    age: age,
    gender: gender,
    isAlive: isAlive,
  };

  personList.push(person);
  console.log(`${fname} added successfully`);
};

const displayperson = () => {
  personList.forEach((person) => {
    console.log(`Full name: ${person.fName} ${person.lName}`);
  });
  console.log();
};

const takeDetails = () => {
  const fname = prompt("First name: ");
  const lname = prompt("Last name: ");
  const age = prompt("Age: ");
  const gender = prompt("Gender: ");
  let proNoun;

  if (gender === "male") {
    proNoun = "He";
  } else if (gender === "female") {
    proNoun = "She";
  } else {
    console.log("Gender input Invalid");
  }
  const isAlive = prompt(`Is ${proNoun} Alive(true or false): `);

  addPerson(fname, lname, age, gender, isAlive);
  console.log(`------${fname} Added to the list Successfully------`);
};

takeDetails();
