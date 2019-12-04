//переключение между карточками
let arrow = document.getElementsByClassName('cards_page');
let prev = document.getElementsByClassName('cards_prev');
let next = document.getElementsByClassName('cards_next');

let close = document.querySelectorAll('.card__close');
let popup = document.querySelector('#popup');
let card = document.getElementsByClassName('cards_block');

let width = 1072;
let count = 1;

let block = cards.querySelector('.slider_block');
let blockElem = cards.querySelectorAll('.cards_block');

let position = 0;
cards.querySelector('.cards_prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    block.style.marginLeft = position + 'px';
}
cards.querySelector('.cards_next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (blockElem.length - count));
    block.style.marginLeft = position + 'px';
};