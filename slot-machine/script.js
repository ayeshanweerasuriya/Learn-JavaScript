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

import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// query params = https://localhost:3000  /      users         ?  key=value&key=value&key=value
//                ^       domain       ^   ^  route path      ^
//                                                                "?" < says after this it is a query string,
//                                                                "key=value" < these are key value pairs,
//                                                                "&"  means and, to add another pair

// middleware
app.use("/", (req, res, next) => {
  console.log(req.method + " - " + req.url);
  next();
});

const findMatchedIndex = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.status(400).json({ error: "not a number" });
  const findIndex = users.findIndex((user) => user.id === parsedId);
  if (findIndex === -1) return res.sendStatus(404);
  req.findIndex = findIndex;
  next();
};

let users = [
  { id: 1, name: "ayeshan", age: 23 },
  { id: 2, name: "jason", age: 13 },
  { id: 3, name: "mason", age: 25 },
];

// handle base route
app.get("/", (req, res) => {
  res.send({ mssg: "Success" });
});

// handle query string
app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  if (filter && value)
    return res.send(users.filter((user) => user[filter].includes(value)));
  return res.send(users);
});

app.get("/api/users", (req, res) => {
  return users.length === 0 ? res.sendStatus(404) : res.send(users);
});

app.get("/api/users/:id", findMatchedIndex, (req, res) => {
  const { findIndex } = req;
  return findIndex === -1 ? res.sendStatus(404) : res.send(users[findIndex]);
});

app.get("/api/users/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const user = users.find((u) => u.name === name);

  user ? res.send(user) : res.status(404).json({ msg: "Not Found" });
});

app.post("/api/users", (req, res) => {
  const { body } = req;
  const newUser = { id: users[users.length - 1].id + 1, ...body };
  users.push(newUser);
  res.status(201).send(users);
});

app.put("/api/users/:id", findMatchedIndex, (req, res) => {
  const { body, findIndex } = req;
  users[findIndex] = { id: users[findIndex].id, ...body };
  return res.send(users);
});

app.patch("/api/users/:id", findMatchedIndex, (req, res) => {
  const { body, findIndex } = req;
  users[findIndex] = { ...users[findIndex], ...body };
  return res.sendStatus(200);
});

app.delete("/api/users/:id", findMatchedIndex, (req, res) => {
  const { findIndex } = req;
  users.splice(findIndex, 1);
  return res.status(202).send(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
