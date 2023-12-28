const prompt = require("prompt-sync")();

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

menu();
