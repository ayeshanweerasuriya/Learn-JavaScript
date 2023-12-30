const prompt = require("prompt-sync")();

const menu = () => {
  while (true) {
    console.log("1. Add book");
    console.log("2. Delete book");
    console.log("3. Update book");
    console.log("4. Search book");
    console.log("5. Exit");

    const choice = prompt("Choice: ");

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
