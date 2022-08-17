// scroll
window.onscroll = function() {
    myfunction();
    stickyHeaderPost();
    HintShowFooter();
}

var navbar = document.querySelector('.main__center-navbar')
var sticky = navbar.offsetTop;
console.log(sticky);

function myfunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        document.querySelector('.logo-center-hint').style.display = 'block !important';
    } 
    else {
        navbar.classList.remove("sticky");
    }
}

var headerPosts = document.querySelector('.header-posts');
var stickyPost = headerPosts.offsetTop;
console.log(window.pageYOffset);

function stickyHeaderPost() {
    if(window.pageYOffset >= stickyPost) {
        headerPosts.classList.add("sticky-headerPost");
    }
    else {
        headerPosts.classList.remove("sticky-headerPost");
    }
}

var navMobileElement = document.querySelector('.nav-mobile');
var TempScrollbar = 0;

function HintShowFooter() {
    if(TempScrollbar < window.pageYOffset) {
        navMobileElement.style.display = 'none';
    }
    else if(TempScrollbar >= window.pageYOffset){
        navMobileElement.style.display = 'block';
    }
    TempScrollbar = window.pageYOffset;
    console.log(TempScrollbar);
}


