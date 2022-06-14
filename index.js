function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //  sends a fetch request to 'https://anapioficeandfire.com/api/books'
  // renders book titles into the DOM by passing a JSON object to renderBooks()
  const fetchBooks = fetch("https://anapioficeandfire.com/api/books")
    .then((res) => res.json())
    .then((jsonData) => renderBooks(jsonData));
  return fetchBooks;
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
