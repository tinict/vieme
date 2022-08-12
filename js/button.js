var btnPostElement = document.querySelector('.btn-post');
console.log(btnPostElement);
var btnFaGridElement = btnPostElement.querySelector('.fa-grip');
console.log(btnFaGridElement);
var btnAppElement = document.querySelector('.btn-app');
console.log(btnAppElement);
var btnTitleElements = btnAppElement.querySelectorAll('h6');
console.log(btnTitleElements);

btnFaGridElement.onclick = function() {
    for(var i = 0; i < btnTitleElements.length; ++i) {
        btnTitleElements[i].classList.toggle("titleHint");
    }
}

var btnPlusElement = document.querySelector('.item-mobile .fa-circle-plus');
console.log(btnPlusElement);
var showSubMenu = document.querySelector('.sub-menu-plus');
console.log(showSubMenu);

btnPlusElement.onclick = function() {
    console.log("Hello");
    showSubMenu.classList.toggle('show-sub-menu');
}

var itemMenuMobile = document.querySelectorAll('.item-mobile h6');
var btnMobile = document.querySelectorAll('.item-mobile i');

document.querySelector('.fa-house').onclick = function() {
    for(var i = 0; i < itemMenuMobile.length; ++i) {
        if(itemMenuMobile[i].textContent !== 'Trang chủ') {
            itemMenuMobile[i].classList.remove('title-show');
            btnMobile[i].classList.remove('line-hight');
        }
    }
    document.querySelector('.home-title').classList.add('title-show');
    for(var  i = 0; i < btnMobile.length; ++i) {
        btnMobile[i].classList.add('line-hight');
    }
    document.querySelector('.fa-house').classList.remove('line-hight');
}

document.querySelector('.fa-shop').onclick = function() {
    for(var i = 0; i < itemMenuMobile.length; ++i) {
        if(itemMenuMobile[i].textContent !== 'Market') {
            itemMenuMobile[i].classList.remove('title-show');
            btnMobile[i].classList.remove('line-hight');
        }
    }
    document.querySelector('.market-title').classList.add('title-show');
    for(var  i = 0; i < btnMobile.length; ++i) {
        btnMobile[i].classList.add('line-hight');
    }
    document.querySelector('.fa-shop').classList.remove('line-hight');
}

document.querySelector('.fa-message').onclick = function() {
    for(var i = 0; i < itemMenuMobile.length; ++i) {
        if(itemMenuMobile[i].textContent !== 'Chat') {
            itemMenuMobile[i].classList.remove('title-show');
            btnMobile[i].classList.remove('line-hight');
        }
    }
    document.querySelector('.chat-title').classList.add('title-show');
    for(var  i = 0; i < btnMobile.length; ++i) {
        btnMobile[i].classList.add('line-hight');
    }
    document.querySelector('.fa-message').classList.remove('line-hight');
}

document.querySelector('.fa-th-list').onclick = function() {
    for(var i = 0; i < itemMenuMobile.length; ++i) {
        if(itemMenuMobile[i].textContent !== 'Tiện ích') {
            itemMenuMobile[i].classList.remove('title-show');
            btnMobile[i].classList.remove('line-hight');
        }
    }
    document.querySelector('.utilities-title').classList.add('title-show');
    for(var  i = 0; i < btnMobile.length; ++i) {
        btnMobile[i].classList.add('line-hight');
    }
    document.querySelector('.fa-th-list').classList.remove('line-hight');
}


