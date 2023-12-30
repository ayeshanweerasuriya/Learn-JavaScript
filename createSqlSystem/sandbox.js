const prompt = require("prompt-sync")();

const addBook = () => {
  console.log(`\n<-----Add-Book-Menu----->\n`);
  const title = prompt("Book Title: ");
  const author = prompt("Book Author: ");
  const book = prompt("Book Year: ");
};

const menu = () => {
  while (true) {
    console.log("1. Add book");
    console.log("2. Delete book");
    console.log("3. Update book");
    console.log("4. Search book");
    console.log("5. Exit");

    const choice = prompt(`\nChoice: `);

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
        searchBook();
        break;
      case "5":
        return;
    }
  }
};

menu();
