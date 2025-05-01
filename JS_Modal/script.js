'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const modalDisplay = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const modalRemoved = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', modalDisplay);
}
close - modal.addEventListener('click', modalRemoved);

overlay.addEventListener('click', modalRemoved);
