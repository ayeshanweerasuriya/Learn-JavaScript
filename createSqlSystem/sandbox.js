const prompt = require("prompt-sync")();
const sql = require("mysql2");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "150065", // Replace with your MySQL root password
  database: "librarymanagement",
  port: 3306,
  connectTimeout: 10000, // 10 seconds
});

// Handle MySQL connection errors
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

const menu = () => {
  while (true) {
    console.log(`\n--------------------------------------------`);
    console.log(`---------Welcome-to-library-system----------`);
    console.log(`1. Add book`);
    console.log(`2. Delete book`);
    console.log(`3. Update book`);
    console.log(`4. Remove book`);
    console.log(`5. Exit`);

    const choice = prompt(`Please enter your choice: `);

    switch (choice) {
      case "1":
        addBook();
        break;
      case "2":
        deleteBook();
        break;
      case "3":
        updateBook();
        break;
      case "4":
        removeBook();
        break;
      case "5":
        return;
      default:
        console.log("Invalid choice. please try again");
    }
  }
};

const addBook = () => {
  console.log(`\n--------------1.Add-Book-Menu---------------`);
  while (true) {
    const title = prompt("Book title: ");
    const author = prompt("Author: ");
    const year = prompt("Year: ");

    if (title.trim() === "" || author.trim() === "" || year.trim() === "") {
      console.log("Error: Please provide values for all fields. Try again.");
    } else {
      const sql = `INSERT INTO books (title, author, book_year) VALUES (${title}, ${author}, ${year})`;

      connection.query(sql, (err, result) => {
        if (err) {
          console.error("Error adding book to database:", err);
        } else {
          if (result.affectedRows > 0) {
            console.log(
              `Book added: ${title} by ${author}, published in ${year}`
            );
            menu();
          } else {
            console.log(
              `Failed to add ${title} to the library. No rows affected.`
            );
          }
        }

        // Close the database connection
        connection.end();
      });
    }
  }
};

menu();
