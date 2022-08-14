var btnStatusElement = document.querySelector('.btn-status');
console.log(btnStatusElement);
var formPostElement = document.querySelector('.form-post');
console.log(formPostElement);

var backHomeElement = document.querySelector('.fa-arrow-left');
console.log(backHomeElement);
var containerPostElement = document.querySelector('.container-post');
var navMobileElement = document.querySelector('.nav-mobile');
btnStatusElement.addEventListener('click', function() {
    formPostElement.style.display = 'block';
    containerPostElement.style.display = 'none';
    navMobileElement.style.display = 'none ';
});

backHomeElement.addEventListener('click', function() {
    formPostElement.style.display = 'none';
    containerPostElement.style.display = 'block';
    navMobileElement.style.display = 'block';
});

document.querySelector('.form-write-post').onclick = function() {
    if(document.querySelector('.form-write-post').textContent === 'Bạn đang nghĩ gì?')
        document.querySelector('.form-write-post').textContent = "";
}

var postElement = document.querySelector('.post');
console.log(postElement);

function createPost (id,name,text,linkImg) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.linkImg = linkImg;
}

var postElements = [];
var uploadImageElement = document.querySelector('#uploadImage');

postElement.addEventListener('click', function() {
    var textPost = document.querySelector('.form-write-post').textContent;
    var textAreaElement = document.querySelector('.form-write-post');
    console.log(textAreaElement.textContent, " " , postElements.length);
    var createPostUser = new createPost("1","Vieme", textPost,uploadImageElement.value.slice(12,uploadImageElement.value.length));
    postElements.push(createPostUser);
    var htmls = postElements.map(function(postElement) {
        return `
        <div class="itemBox-post">
            <div class="header-post">
                <div class="left-itemPost">
                    <div class="avatar">
                        <img src="style/img/nhan-dan-facebook-removebg-preview.png" alt="avatar-user">
                    </div>
                    <span class="name-user">${postElement.name}</span>
                    <span>-</span>
                    <span class="time-post">4h</span>
                </div>
                <div class="right-itemPost">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div class="contents-post">
                <p>${postElement.text}</p>
            </div>
            <div class="img-post">
                <img src="style/img/${postElement.linkImg}" alt="">
            </div>
            <div class="container-icon">
                <div class="gr-left">
                    <div class="grp-item">
                        <i class="fa-solid fa-heart"></i>
                        <span>0</span>
                    </div>
                    <div class="grp-item">
                        <i class="fa-solid fa-comment-dots"></i>
                        <span>0</span>
                    </div>
                    <div class="grp-item">
                        <i class="fa-solid fa-share"></i>
                        <span>0</span>
                    </div>
                </div>
                <div class="gt-right">
                    <div class="grp-item">
                        <i class="fa-solid fa-bookmark"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    var html = htmls.join('');
    containerPostElement.innerHTML = html;
    // if(postElement.linkImg === " ") {
    //     var imgPostElement = document.querySelector('.img-post');
    //     postElement.classList.remove('img-post');
    // }
});

uploadImageElement.onchange = function() {
    var containersImgElement = document.querySelector(".containers-img");
    containersImgElement.innerHTML = `<img src="style/img/${uploadImageElement.value.slice(12,uploadImageElement.value.length)}" alt="">`;
}

