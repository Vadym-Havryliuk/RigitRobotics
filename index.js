"use strict";

let body = document.body;
let menu = document.querySelector('.links-navigation');
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
    } else {
        logo.after(menu);
    }
}

function transitionNav() {
    if (window.innerWidth < 1050) {
        switch (menu.style.top) {
            case '-138px':
                menu.style.top = '102px'; 
                break;
            case '102px':
                menu.style.top = '-138px';
                break;
        }
             
    }
}

changePosition();

addEventListener('resize', changePosition);
openLinks.addEventListener('click', transitionNav);