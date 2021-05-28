"use strict";

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-btn');

const toogleMenu = (e) => {
   menu.classList.toggle('is-open');
};

menuButton.addEventListener('click', toogleMenu);
closeMenuButton.addEventListener('click', toogleMenu);

