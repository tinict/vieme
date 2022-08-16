// scroll
window.onscroll = function() {
    myfunction();
    stickyHeaderPost();
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


