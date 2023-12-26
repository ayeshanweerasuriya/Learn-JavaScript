const prompt = require("prompt-sync")();
const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root@localhost",
  // password: "your-mysql-password",
  database: "librarymanagement",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

function addBookToDatabase(title, author, year) {
  const sql = "INSERT INTO books (title, author, year) VALUES (?, ?, ?)";
  const values = [title, author, year];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding book to database:", err);
    } else {
      console.log(`${title} has been added to the library.`);
    }
  });
}

function addBook(title, author, year) {
  const book = {
    title: title,
    author: author,
    year: year,
  };

  addBookToDatabase(title, author, year);
}

function displayBooks() {
  console.log("--------------------------------------");
  console.log("--> List of books in the library");
  library.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
  });
}

function searchBook(title) {
  console.log("--------------------------------------");
  let bookFound = false;

  library.forEach((book) => {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      console.log(`Book Found: ${book.title} by ${book.author} (${book.year})`);
      bookFound = true;
    }
  });

  if (!bookFound) {
    console.log(`Book not found: ${title}`);
  }
}

const menu = () => {
  while (true) {
    console.log(`<---- ************************************ ---->`);
    console.log("<---- Welcome to library management system ---->");
    console.log(`\n<---- select the option ---->\n`);
    console.log("1. Add Book");
    console.log("2. Display Books");
    console.log("3. Search Book");

    const choice = prompt("Enter your choice (1, 2, or 3): ");

    if (choice == -1) {
      break;
    }

    switch (choice) {
      case "1":
        takeBook();
        break;
      case "2":
        displayBooks();
        break;
      case "3":
        takeSearchBook();
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, or 3.");
    }
  }
};

const takeBook = () => {
  console.log(`\n<--- Add book menu --->\n`);
  const name = prompt("Book name: ");
  const author = prompt("Author: ");
  const year = prompt("Year: ");

  addBook(name, author, year);
};

const takeSearchBook = () => {
  const title = prompt("Book title: ");
  searchBook(title);
};

menu();
