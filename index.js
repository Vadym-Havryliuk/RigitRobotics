"use strict";

let body = document.body;
let menu = document.querySelector('.links-navigation');
let logo = document.querySelector('.nav-content .logo');
let button = document.querySelector('.button-contact');
let buttonShadow = document.querySelector('.button-shadow');
let header = document.querySelector('.header');
let aside = document.querySelector('.aside');

function changePosition() {
    if (window.innerWidth < 1050) {
        logo.after(menu);

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

changePosition();

addEventListener('resize', changePosition);