//переключение между карточками
let arrow = document.getElementsByClassName('cards_page');
let prev = document.getElementsByClassName('cards_prev');
let next = document.getElementsByClassName('cards_next');
let bth = document.querySelector('.gallery__item_button');

let closeCard = document.querySelector('.card__close');
let popup = document.querySelector('#popup');
let card = document.querySelectorAll('.cards_block');

bth.addEventListener('click', function() {
    if (popup.style.visibility == 'hidden' &&
        popup.style.opacity == '0' &&
        popup.style.zIndex == '-1') {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';
        popup.style.zIndex = '1000';
    };
});
closeCard.onclick = function() {
    if (popup.style.visibility == 'visible' &&
        popup.style.opacity == '1' &&
        popup.style.zIndex == '1000') {
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
        popup.style.zIndex = '-1';
    }
};
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