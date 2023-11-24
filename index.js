"use strict";

let body = document.body;
let menu = document.querySelector('.links-navigation');
let whiteBlock = document.querySelector('.white-block');

let logo = document.querySelector('.nav-content .logo');
let button = document.querySelector('.button-contact');
let buttonShadow = document.querySelector('.button-shadow');
let header = document.querySelector('.header');
let aside = document.querySelector('.aside');
let openLinks = document.querySelector('.open-links');

function changePosition() {
    if (window.innerWidth < 1050) {
        header.append(menu);

        if (window.innerWidth < 400) { 
            header.after(button);
            aside.before(buttonShadow);
        } else {
            logo.after(button);
            button.after(buttonShadow);
        }

        menu.style.top = assignBottom();
        whiteBlock.style.top = assignBottom();
    } else {
        logo.after(menu);
    }
}

function getHeight() {
    if (window.innerWidth > 840) {
        return 1;
    } else if (window.innerWidth > 715) {
        return 2;
    } else if (window.innerWidth > 550) {
        return 3;
    }
}

function assignHeight() {
    switch(getHeight()) {
        case 1:
            return '102px';
        break;
        case 2:
            return '82px';
        break;
        case 3:
            return '62px';
        break;
    }
}

function assignBottom() {
    switch(getHeight()) {
        case 1:
            return '-138px';
        break;
        case 2:
            return '-158px';
        break;
        case 3:
            return '-178px';
        break;
    }
}

function transitionNavBottom() {
    if (window.innerWidth < 1050 && window.innerWidth > 550) {
        menu.style.animationName = `to-bottom-${getHeight()}`;
        menu.style.animationDuration = '1s';
        menu.style.animationFillMode = 'forwards';

        whiteBlock.style.animationName = `to-bottom-${getHeight()}`;
        whiteBlock.style.animationDuration = '1s';
        whiteBlock.style.animationFillMode = 'forwards';
        
        openLinks.removeEventListener('click', transitionNavBottom);

        setTimeout(() => {
            menu.style.top = assignHeight();
            whiteBlock.style.top = assignHeight();
            whiteBlock.style.boxShadow = '0px 0px 20px 10px white';

            openLinks.addEventListener('click', transitionNavTop); 
        }, 1100);
           
    }
}

function transitionNavTop() {
    if (window.innerWidth < 1050 && window.innerWidth > 550) {
        whiteBlock.style.boxShadow = '0px 0px 0px 0px white';

        menu.style.animationName = `to-top-${getHeight()}`;
        menu.style.animationDuration = '1s';
        menu.style.animationDelay = '100ms';
        menu.style.animationFillMode = 'forwards';

        whiteBlock.style.animationName = `to-top-${getHeight()}`;
        whiteBlock.style.animationDuration = '1s';
        whiteBlock.style.animationDelay = '100ms';
        whiteBlock.style.animationFillMode = 'forwards';

        openLinks.removeEventListener('click', transitionNavTop);

        setTimeout(() => {
            menu.style.top = assignBottom();
            whiteBlock.style.top = assignBottom();

            openLinks.addEventListener('click', transitionNavBottom);
        }, 1100);
    }
}

changePosition();

addEventListener('resize', changePosition);
openLinks.addEventListener('click', transitionNavBottom);
