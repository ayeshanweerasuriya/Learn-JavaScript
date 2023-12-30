const prompt = require("prompt-sync")();

const library = [];

const addBook = () => {
  console.log(`\n<-----Add-Book-Menu----->\n`);
  const title = prompt("Book Title: ");
  const author = prompt("Book Author: ");

  let year;

  while (true) {
    const bookYear = prompt("Book Year: ");
    if (isNaN(bookYear)) {
      console.log("Please enter valid year.");
    } else {
      year = bookYear;
      break;
    }
  }

  const book = {
    title: title,
    author: author,
    year: year,
  };

  library.push(book);

  console.log(`\n${title} added to the library.\n`);

  setTimeout(() => {
    menu();
  }, 3000);
};

const menu = () => {
  while (true) {
    console.clear();
    console.log("--------------------------------------------------");
    console.log("-----Welcome-to-the-Library-Mangement-System----->");
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
      default:
        console.log("Invalid choice. Please enter a valid option.");
        console.log("Press Enter to continue...");
        break;
    }
  }
};

menu();
