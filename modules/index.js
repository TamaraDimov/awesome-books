const form = document.querySelector("form");
const bookList = document.querySelector(".book-list");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const addBtn = document.querySelector(".add-btn");

class BookFun {
  constructor() {
    this.collections = JSON.parse(localStorage.getItem("collections")) || [];
  }

  removeBook(cur) {
    const curparent = cur.parentElement;
    const curidx = Array.from(curparent.parentElement.children).indexOf(
      curparent
    );
    curparent.remove();
    this.collections = this.collections.filter(
      (collection, index) => index !== curidx
    );

    localStorage.setItem("collections", JSON.stringify(this.collections));
  }

  showBook() {
    bookList.innerHTML = "";
    this.collections.forEach((collection, index) => {
      bookList.innerHTML += `<div id="${index}" class='books'>
              <p class="book-info">
                  <span class="title">"${collection.title}" </span>
                  <span>&nbsp;by&nbsp;</span>
                  <span class="author">${collection.author}</span>
              </p>
              <button class="remove-btn">Remove</button>
      </div>`;
    });
  }

  addBook(book) {
    this.collections.push(book);
    localStorage.setItem("collections", JSON.stringify(this.collections));
  }
}
const bookFun = new BookFun();
bookFun.showBook();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = { title: titleInput.value, author: authorInput.value };

  if (titleInput.value !== "" && authorInput.value !== "") {
    addBtn.disabled = false;
    bookFun.addBook(book);
    titleInput.value = "";
    authorInput.value = "";
    bookFun.showBook(book);
  } else {
    addBtn.disabled = true;
  }
});

bookList.addEventListener("click", (e) => {
  if (e.target.className.includes("remove-btn")) {
    const targetEl = e.target;
    bookFun.removeBook(targetEl);
  }
});

// Date and time
const clockElement = document.getElementById("clock");

const clock = () => {
  clockElement.textContent = new Date().toString();
};

setInterval(clock, 1000);

const navMenus = document.querySelectorAll("nav a");
const contentEls = document.querySelectorAll(".contents");

for (let i = 0; i < navMenus.length; i += 1) {
  navMenus[i].addEventListener("click", () => {
    contentEls.forEach((content, idx) => {
      if (idx !== i && content.className.includes("active")) {
        content.classList.remove("active");
      }
    });

    contentEls[i].classList.add("active");
  });
}
