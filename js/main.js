// scroll
window.onscroll = function() {
    myfunction();
}

var navbar = document.querySelector('.main__center-navbar')
var sticky = navbar.offsetTop;

function myfunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        document.querySelector('.logo-center-hint').style.display = 'block !important';
    } 
    else {
        navbar.classList.remove("sticky");
    }
}


