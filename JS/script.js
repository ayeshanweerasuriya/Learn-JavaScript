const prompt = require("prompt-sync")();

let correctPassword = false;

const checkPassword = (password) => {
  let attempt = 0;
  while (attempt <= 3) {
    // Check if the input contains at least one uppercase letter, one digit, and one special character
    const containsUppercase = /[A-Z]/.test(password);
    const containsDigit = /\d/.test(password);
    const containsSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
      password
    );

    if (
      password.length < 8 ||
      !containsDigit ||
      !containsUppercase ||
      !containsSpecialCharacter
    ) {
      console.log(
        "Invalid username. It should be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character."
      );
      attempt++;
    } else {
      correctPassword = true;
      break;
    }
  }
};

const logIn = (bringUsername, bringPassword) => {
  console.log(`Welcome, to login page`);
  let count = 1;
  while (count <= 3) {
    const username = prompt("Username: ");
    const password = prompt("Password: ");
    if (username === bringUsername || password === bringPassword) {
      console.log(`Welcome!, ${username}`);
      break;
    } else {
      console.log(`Username or password incorrect.`);
      count++;
      if (count === 3) {
        while (true) {
          const wannaSignup = prompt(
            `Your tries are over. Wanna signup? (press "y" or "n"):`
          );

          if (wannaSignup.toUpperCase() === "Y") {
            signUp();
          }

          if (wannaSignup.toUpperCase() === "N") {
            console.log("Try again in a moment");
            break;
          }
        }
      }
    }
  }
};

const signUp = () => {
  console.log("Welcome!, Before login you have to create an account");
  const setUsername = prompt("Set username: ");
  while (true) {
    const setPassword = prompt("Set password: ");

    if (!setUsername || !setPassword) {
      console.log("Please enter both username and password.");
    } else {
      checkPassword(setPassword);
      if (correctPassword) {
        console.log(
          `-----------------------------------------\nAccount created successfully`
        );
        logIn(setUsername, setPassword);
        break;
      }
    }
  }
};

signUp();
