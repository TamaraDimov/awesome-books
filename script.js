const bookList = document.querySelector("#book-ul");
const title = document.querySelector("#input-title");
const author = document.querySelector("#input-author");
const buttonAdd = document.querySelector("#add-button");
const form = document.querySelector(".main-form");
const books = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
  };
  books.push(book);
  title.value = "";
  author.value = "";

  const bookItem = document.createElement("li");
  bookItem.classList.add("book-ul");
  bookItem.innerHTML = `
        <p class="books">${book.title}</p>
        <p class="books">${book.author}</p>
        <button class="remove">Remove</button>
        <div class="border">
    `;
  bookList.appendChild(bookItem);
  localStorage.setItem("books", JSON.stringify(books));
});

// Remove books from the List
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
    localStorage.removeItem("books", JSON.stringify(books));
  }
});
