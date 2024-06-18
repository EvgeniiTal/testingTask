function $(selector) {
  return document.querySelector(selector);
}

const modal = $('.modal');
const button = $('.button');
const close = $('.modal__close');


button.addEventListener('click', () => {
  modal.classList.add('active');
})

close.addEventListener('click', () => {
  modal.classList.remove('active');
})
