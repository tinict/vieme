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

