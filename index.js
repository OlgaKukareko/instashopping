'use strict';

let arrow = document.getElementsByClassName('cards_page'),
    prev = document.querySelector('.cards_prev'),
    next = document.querySelector('.cards_next'),
    buttons = document.querySelectorAll('.gallery__item_link');

let closes = document.querySelectorAll('.card__close');
let popup = document.querySelector('.popup');


buttons.forEach(button => button.addEventListener('click', function() {
    popup.classList.add('popup_active');
    slider();
}));

closes.forEach(close => close.addEventListener('click', function() {
    popup.classList.remove('popup_active');
}));

let sliderCards = document.querySelectorAll('.slider_block .cards_block');
let current = 0;

function slider() {
    for (let i = 0; i < sliderCards.length; i++) {
        sliderCards[i].classList.add('slide_not-active');
    }
    sliderCards[current].classList.remove('slide_not-active');
}
document.querySelector('.cards_prev').onclick = function() {
    if (current - 1 == -1) {
        current = sliderCards.length - 1;
    } else {
        current--;
    }
    slider();

};
document.querySelector('.cards_next').onclick = function() {
    if (current + 1 == sliderCards.length) {
        current = 0;
    } else {
        current++;
    }
    slider();

};