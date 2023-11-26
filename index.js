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

let blockNetworks = document.querySelector('.aside .block-networks');
let squareOne = document.querySelector('.aside .square-1');
let squareTwo = document.querySelector('.aside .square-2');
let blockNetworksCopy = document.querySelector('.aside .block-networks-copy');
let squareCopyOne = document.querySelector('.aside .square-copy-1');
let squareCopyTwo = document.querySelector('.aside .square-copy-2');

function removeShadow() {
    blockNetworksCopy.classList.remove('white-shadow');
    squareCopyOne.classList.remove('white-shadow');
    squareCopyTwo.classList.remove('white-shadow');
}

function addShadow() {
    blockNetworksCopy.classList.add('white-shadow');
    squareCopyOne.classList.add('white-shadow');
    squareCopyTwo.classList.add('white-shadow');
}

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

function resizeTop() {
    menu.style.top = assignTop();
    whiteBlock.style.top = assignTop();
}

function resizeBottom() {
    menu.style.top = assignBottom();
    whiteBlock.style.top = assignBottom();
}

function getHeight() {
    if (window.innerWidth > 840) {
        return 1;
    } else if (window.innerWidth > 715) {
        return 2;
    } else if (window.innerWidth > 260) {
        return 3;
    } else {
        return 4;
    }
}

function assignBottom() {
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
        case 4:
            return '50px';
        break;
    }
}

function assignTop() {
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
        case 4:
            return '-150px';
        break;
    }
}

function transitionNavBottom() {
    if (window.innerWidth < 1050 && window.innerWidth > 550) {
        menu.style.animationName = `to-bottom-${getHeight()}`;
        menu.style.animationDuration = '1s';
        //menu.style.animationFillMode = 'forwards';

        whiteBlock.style.animationName = `to-bottom-${getHeight()}`;
        whiteBlock.style.animationDuration = '1s';
        //whiteBlock.style.animationFillMode = 'forwards';
        
        openLinks.removeEventListener('click', transitionNavBottom);
        addEventListener('resize', resizeBottom);
        removeEventListener('resize', resizeTop);

        setTimeout(() => {
            menu.style.top = assignBottom();
            whiteBlock.style.top = assignBottom();
        }, 1000);

        setTimeout(() => {
            whiteBlock.style.boxShadow = '0px 0px 20px 10px white';
            openLinks.addEventListener('click', transitionNavTop); 
        }, 1100);  
    }

    if (window.innerWidth < 550 && window.innerWidth > 400) {
        menu.style.animationName = `to-bottom-${getHeight()}`;
        menu.style.animationDuration = '1s';

        whiteBlock.style.animationName = `to-bottom-${getHeight()}`;
        whiteBlock.style.animationDuration = '1s';

        blockNetworks.style.animationName = 'aside-to-bottom-1';
        blockNetworks.style.animationDuration = '1s';

        squareOne.style.animationName = 'aside-to-bottom-2';
        squareOne.style.animationDuration = '1s';

        squareTwo.style.animationName = 'aside-to-bottom-3';
        squareTwo.style.animationDuration = '1s';
        
        blockNetworksCopy.style.animationName = 'aside-to-bottom-1';
        blockNetworksCopy.style.animationDuration = '1s';

        squareCopyOne.style.animationName = 'aside-to-bottom-2';
        squareCopyOne.style.animationDuration = '1s';

        squareCopyTwo.style.animationName = 'aside-to-bottom-3';
        squareCopyTwo.style.animationDuration = '1s';

        setTimeout(() => {
            menu.style.top = '62px';
            whiteBlock.style.top = '62px';

            blockNetworks.style.top = '62px';
            squareOne.style.top = '212px';
            squareTwo.style.top = '183px';

            blockNetworksCopy.style.top = '62px';
            squareCopyOne.style.top = '212px';
            squareCopyTwo.style.top = '183px';
        }, 1000);

        setTimeout(() => {
            whiteBlock.style.boxShadow = '0px 0px 20px 10px white';
        }, 1100);

        setTimeout(() => {
            blockNetworks.style.animationName = 'aside-to-right-1';
            blockNetworks.style.animationDuration = '1s';

            squareOne.style.animationName = 'aside-to-right-2';
            squareOne.style.animationDuration = '1s';

            squareTwo.style.animationName = 'aside-to-right-3';
            squareTwo.style.animationDuration = '1s';
            
            blockNetworksCopy.style.animationName = 'aside-to-right-1';
            blockNetworksCopy.style.animationDuration = '1s';

            squareCopyOne.style.animationName = 'aside-to-right-2';
            squareCopyOne.style.animationDuration = '1s';

            squareCopyTwo.style.animationName = 'aside-to-right-3';
            squareCopyTwo.style.animationDuration = '1s';
        }, 1500);

        setTimeout(() => {
            blockNetworks.style.left = '180px';
            squareOne.style.left = '180px';
            squareTwo.style.left = '238px';

            blockNetworksCopy.style.left = '180px';
            squareCopyOne.style.left = '180px';
            squareCopyTwo.style.left = '238px';
        }, 2500);

        setTimeout(() => {
            blockNetworksCopy.style.boxShadow = '0px 0px 20px 10px white';
            squareCopyOne.style.boxShadow = '0px 0px 20px 10px white';
            squareCopyTwo.style.boxShadow = '0px 0px 20px 10px white';

            openLinks.removeEventListener('click', transitionNavBottom);
            openLinks.addEventListener('click', transitionNavTop);
        }, 2600);
    }
}

function transitionNavTop() {
    if (window.innerWidth < 1050 && window.innerWidth > 550) {
        whiteBlock.style.boxShadow = '0px 0px 0px 0px white';

        menu.style.animationName = `to-top-${getHeight()}`;
        menu.style.animationDuration = '1s';
        menu.style.animationDelay = '100ms';
        //menu.style.animationFillMode = 'forwards';

        whiteBlock.style.animationName = `to-top-${getHeight()}`;
        whiteBlock.style.animationDuration = '1s';
        whiteBlock.style.animationDelay = '100ms';
        //whiteBlock.style.animationFillMode = 'forwards';

        openLinks.removeEventListener('click', transitionNavTop);
        addEventListener('resize', resizeTop);
        removeEventListener('resize', resizeBottom);

        setTimeout(() => {
            menu.style.top = assignTop();
            whiteBlock.style.top = assignTop();

            openLinks.addEventListener('click', transitionNavBottom);
        }, 1100);
    }

    if (window.innerWidth < 550 && window.innerWidth > 400) {
        blockNetworksCopy.style.boxShadow = '0px 0px 0px 0px white';
        squareCopyOne.style.boxShadow = '0px 0px 0px 0px white';
        squareCopyTwo.style.boxShadow = '0px 0px 0px 0px white';

        blockNetworks.style.animationName = 'aside-to-left-1';
        blockNetworks.style.animationDuration = '1s';
        blockNetworks.style.animationDelay = '100ms';
        blockNetworks.style.animationFillMode = 'forwards';

        squareOne.style.animationName = 'aside-to-left-2';
        squareOne.style.animationDuration = '1s';
        squareOne.style.animationDelay = '100ms';
        squareOne.style.animationFillMode = 'forwards';

        squareTwo.style.animationName = 'aside-to-left-3';
        squareTwo.style.animationDuration = '1s';
        squareTwo.style.animationDelay = '100ms';
        squareTwo.style.animationFillMode = 'forwards';
        
        blockNetworksCopy.style.animationName = 'aside-to-left-1';
        blockNetworksCopy.style.animationDuration = '1s';
        blockNetworksCopy.style.animationDelay = '100ms';
        blockNetworksCopy.style.animationFillMode = 'forwards';

        squareCopyOne.style.animationName = 'aside-to-left-2';
        squareCopyOne.style.animationDuration = '1s';
        squareCopyOne.style.animetionDelay = '100ms';
        squareCopyOne.style.animationFillMode = 'forwards';

        squareCopyTwo.style.animationName = 'aside-to-left-3';
        squareCopyTwo.style.animationDuration = '1s';
        squareCopyTwo.style.animationDelay = '100ms';
        squareCopyTwo.style.animationFillMode = 'forwards';

        setTimeout(() => {
            blockNetworks.style.left = '30px';
            squareOne.style.left = '30px';
            squareTwo.style.left = '88px';

            blockNetworksCopy.style.left = '30px';
            squareCopyOne.style.left = '30px';
            squareCopyTwo.style.left = '88px';
        }, 1100);

        setTimeout(() => {
            whiteBlock.style.boxShadow = '0px 0px 0px 0px white';
        }, 1200);

        setTimeout(() => {
            blockNetworks.style.animationName = 'aside-to-top-1';
            blockNetworks.style.animationDuration = '1s';
            blockNetworks.style.animationFillMode = 'forwards';

            squareOne.style.animationName = 'aside-to-top-2';
            squareOne.style.animationDuration = '1s';
            squareOne.style.animationFillMode = 'forwards';

            squareTwo.style.animationName = 'aside-to-top-3';
            squareTwo.style.animationDuration = '1s';
            squareTwo.style.animationFillMode = 'forwards';
            
            blockNetworksCopy.style.animationName = 'aside-to-top-1';
            blockNetworksCopy.style.animationDuration = '1s';
            blockNetworksCopy.style.animationFillMode = 'forwards';

            squareCopyOne.style.animationName = 'aside-to-top-2';
            squareCopyOne.style.animationDuration = '1s';
            squareCopyOne.style.animationFillMode = 'forwards';

            squareCopyTwo.style.animationName = 'aside-to-top-3';
            squareCopyTwo.style.animationDuration = '1s';
            squareCopyTwo.style.animationFillMode = 'forwards';

            menu.style.animationName = `to-top-${getHeight()}`;
            menu.style.animationDuration = '1200ms';
            menu.style.animationFillMode = 'forwards';

            whiteBlock.style.animationName = `to-top-${getHeight()}`;
            whiteBlock.style.animationDuration = '1200ms';
            whiteBlock.style.animationFillMode = 'forwards';
        }, 2300);
    }
}

changePosition();
removeShadow();

addEventListener('resize', changePosition);
openLinks.addEventListener('click', transitionNavBottom);
