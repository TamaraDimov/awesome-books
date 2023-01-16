import {
  BookFun,
  form,
  titleInput,
  authorInput,
  addBtn,
  bookList,
} from './book.js';

import { DateTime } from './luxon/src/luxon.js';

const clockElement = document.getElementById('clock');
const clock = () => {
  clockElement.textContent = DateTime.now().toISO();
};
setInterval(clock, 1000);

const books = new BookFun();

window.addEventListener('load', () => {
  books.showBook();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = { title: titleInput.value, author: authorInput.value };

  if (titleInput.value !== '' && authorInput.value !== '') {
    addBtn.disabled = false;
    books.addBook(book);
    titleInput.value = '';
    authorInput.value = '';
    books.showBook(book);
  } else {
    addBtn.disabled = true;
  }
});

bookList.addEventListener('click', (e) => {
  if (e.target.className.includes('remove-btn')) {
    const targetEl = e.target;
    books.removeBook(targetEl);
  }
});

const navMenus = document.querySelectorAll('nav a');
const contentEls = document.querySelectorAll('.contents');
navMenus.forEach((navMenu, i) => {
  navMenu.addEventListener('click', () => {
    contentEls.forEach((content, idx) => {
      if (idx !== i && content.className.includes('active')) {
        content.classList.remove('active');
      }
    });
    contentEls[i].classList.add('active');
  });
});

// for (let i = 0; i < navMenus.length; i += 1) {
//   navMenus[i].addEventListener('click', () => {
//     contentEls.forEach((content, idx) => {
//       if (idx !== i && content.className.includes('active')) {
//         content.classList.remove('active');
//       }
//     });

// contentEls[i].classList.add('active');
//   });
// }
