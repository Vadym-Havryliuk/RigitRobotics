"use strict";

let body = document.body;
let menu = document.querySelector('.links-navigation');
let logo = document.querySelector('.nav-content .logo');
let square2 = document.querySelector('.header .square-copy-2');

function changePosition() {
    if (window.innerWidth < 1050) {
        square2.after(menu);
    } else {
        logo.after(menu);   
    }
}

changePosition();

addEventListener('resize', changePosition);