const library = [];

function addBook(title, author, year) {
  const book = {
    title: title,
    author: author,
    year: year,
  };

  library.push(book);
  console.log(`${title} has been added to the library.`);
}

function displayBooks() {
  console.log("--------------------------------------");
  console.log("<-- List of books in the library -->");
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

// Example usage of the functions
addBook("The Hobbit", "J.R.R. Tolkien", 1937);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
addBook("1984", "George Orwell", 1949);

displayBooks();

searchBook("The Hobbit");
searchBook("Harry Potter");
