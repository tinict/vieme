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

