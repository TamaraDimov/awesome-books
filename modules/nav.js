export const navMenus = document.querySelectorAll('nav a');
export const contentEls = document.querySelectorAll('.contents');

for (let i = 0; i < navMenus.length; i += 1) {
  navMenus[i].addEventListener('click', () => {
    contentEls.forEach((content, idx) => {
      if (idx !== i && content.className.includes('active')) {
        content.classList.remove('active');
      }
    });

    contentEls[i].classList.add('active');
  });
}
