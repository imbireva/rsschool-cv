'use strict';

const page = document.querySelector('.page');
const nav = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

const addClassOpen = () => {
  page.classList.add('page_nav-open');
  nav.classList.add('nav-list_nav-open');
  hamburger.classList.add('hamburger_nav-open');
};

const removeClassOpen = () => {
  page.classList.remove('page_nav-open');
  nav.classList.remove('nav-list_nav-open');
  hamburger.classList.remove('hamburger_nav-open');
};

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('hamburger_nav-open')) removeClassOpen();
  else addClassOpen();
});

nav.addEventListener('click', (event) => {
  if (event.target.classList.contains('link')) removeClassOpen();
});
