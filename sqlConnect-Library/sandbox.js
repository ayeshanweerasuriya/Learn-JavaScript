const prompt = require("prompt-sync")();
const mysql = require("mysql2");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your MySQL root password
  database: "",
  port: null,
  connectTimeout: 30000, // 30 seconds (adjust as needed)
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

function addBookToDatabase(title, author, year) {
  const sql = `INSERT INTO books (title, author, book_year) VALUES (${title}, ${author}, ${year})`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error adding book to database:", err);
    } else {
      console.log(`${title} has been added to the library.`);
    }

    // Close the database connection
    connection.end();
  });
}

function deleteBook() {
  const title = prompt("Book title: ");
  const sql = `DELETE FROM books WHERE title = '${title}'`;
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error deleting book from database:", err);
    } else {
      console.log(`${title} has been deleted from the library.`);
    }

    // Close the database connection
    connection.end();
  });
}

function displayBooks() {
  console.log("--------------------------------------");
  console.log("--> List of books in the library");
  library.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
    // Close the database connection
    connection.end();
  });
}

function searchBook(title) {
  console.log("--------------------------------------");

  const lowerCaseTitle = title.toLowerCase();
  const sql = `SELECT * FROM books WHERE LOWER(title) = LOWER('${lowerCaseTitle}')`;

  // Execute the query
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }

    // Check if any books were found
    if (results.length > 0) {
      results.forEach((book) => {
        console.log(
          `Book Found: ${book.title} by ${book.author} (${book.year})`
        );
      });
    } else {
      console.log(`Book not found: ${title}`);
    }

    // Close the database connection
    connection.end();
  });
}

const menu = () => {
  while (true) {
    console.log(`\n<---- ************************************ ---->\n`);
    console.log("<---- Welcome to library management system ---->");
    console.log(`\n<---- select the option ---->\n`);
    console.log("1. Add Book");
    console.log("2. Display Books");
    console.log("3. Search Book");
    console.log("4. Delete Book");

    const choice = prompt("Enter your choice (1, 2, or 3..): ");

    if (choice == -1) {
      connection.end();
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
      case "4":
        deleteBook();
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, or 3.");
    }
  }
};

const takeBook = () => {
  console.log(`\n<--- Add book menu --->\n`);
  const title = prompt("Book title: ");
  const author = prompt("Author: ");
  const year = prompt("Year: ");

  addBookToDatabase(title, author, year);
};

const takeSearchBook = () => {
  const title = prompt("Book title: ");
  searchBook(title);
};

menu();
