'use strict'

let flag = false;
let one = document.querySelector('.one');
let coord = {};
let basketBlock = document.querySelector('.two');
let basket = basketBlock.getBoundingClientRect();

one.addEventListener('mousedown', (event) => {
    flag = true;
    coord = {
        x: event.offsetX,
        y: event.offsetY
    }
});
document.addEventListener('mouseup', (event) => {
    flag = false;

    if (event.pageX >= basket.left && event.pageX <= basket.right) {
        let copy = one.cloneNode(true);
        copy.removeAttribute('style');
        basketBlock.append(copy);
        // basketBlock.append(one);
    }

    one.removeAttribute('style');
});
document.addEventListener('mousemove', (event) => {
    if (flag) {
        one.style.position = 'absolute';
        one.style.left = (event.pageX - coord.x) + 'px';
        one.style.top = (event.pageY - coord.y) + 'px';
        one.style.zIndex = 2;
        hoverBasket(event);
    }
});

const hoverBasket = (event) => {
    if (event.pageX >= basket.left && event.pageX <= basket.right) {
        basketBlock.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        basketBlock.style.backgroundColor = '';
    }
}