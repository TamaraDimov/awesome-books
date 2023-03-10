export const form = document.querySelector('form');
export const titleInput = document.querySelector('#titleInput');
export const authorInput = document.querySelector('#authorInput');
export const addBtn = document.querySelector('.add-btn');
export const bookList = document.querySelector('.book-list');

export class BookFun {
  constructor() {
    this.collections = JSON.parse(localStorage.getItem('collections')) || [];
  }

  removeBook(cur) {
    const curparent = cur.parentElement;
    const curidx = Array.from(curparent.parentElement.children).indexOf(
      curparent,
    );
    curparent.remove();
    this.collections = this.collections.filter(
      (collection, index) => index !== curidx,
    );

    localStorage.setItem('collections', JSON.stringify(this.collections));
  }

  showBook() {
    bookList.innerHTML = '';
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
    localStorage.setItem('collections', JSON.stringify(this.collections));
  }
}
