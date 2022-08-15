
var btnStatusElement = document.querySelector('.btn-status');
console.log(btnStatusElement);
var formPostElement = document.querySelector('.form-post');
console.log(formPostElement);

var backHomeElement = document.querySelector('.fa-arrow-left');
console.log(backHomeElement);
var containerPostElement = document.querySelector('.container-post');
var navMobileElement = document.querySelector('.nav-mobile');
var formWritePostElement = document.querySelector('.form-write-post');
var writeContentElement = document.querySelector('.write-contents');

btnStatusElement.addEventListener('click', function() {
    writeContentElement.innerHTML = `<p class="form-write-post" contenteditable="true">Bạn đang nghĩ gì?</p><img src="style/img/london-eye-800x534.jpg" alt="" id="img-loading" accept = "image/gif, image/png, image/jpeg" onchange="chooseFile(this)">`;
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

function splitLink(str) {
    var result = str.split("").reverse().join("");
    var temp = "";
    var count = 0;
    for(var i of result) {
        if(i === '/')
            break;
        temp = `${i}${temp}`;
    }
    return temp;
}

console.log(splitLink("/hello.img"));

function createPost (id,name,text,linkImg,timepost) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.linkImg = linkImg;
    this.timepost = timepost;
}

var postElements = [];
var uploadImageElement = document.querySelector('#uploadImage');

function createTimePost() {
    var date = new Date();
    var time = date.getHours() + ':' + date.getMinutes();
    var getDay = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    var fullTime = time + ' - ' + getDay;
    return fullTime;
}

console.log(createTimePost());


postElement.addEventListener('click', function() {
    var textPost = document.querySelector('.form-write-post').textContent;
    var textAreaElement = document.querySelector('.form-write-post');
    console.log(textAreaElement.textContent, " " , postElements.length);
    console.log(uploadImageElement.values);
    var createPostUser = new createPost("1","Vieme", textPost,uploadImageElement.value,createTimePost());
    postElements.push(createPostUser);
    var htmls = postElements.map(function(postElement) {
        return `
                        <div class="itemBox-post">
                            <div class="header-post">
                                <div class="left-itemPost">
                                    <div class="avatar">
                                        <img src="style/img/nhan-dan-facebook-removebg-preview.png" alt="avatar-user">
                                    </div>
                                    <div class="name-type">
                                        <span class="name-user">${postElement.name}</span>
                                        <div class="type-time">
                                            <span class="time-post">${postElement.timepost}</span>
                                            <span>.</span>
                                            <i class="fa-solid fa-earth-africa"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-itemPost">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <div class="contents-post">
                                <p>${postElement.text}</p>
                            </div>
                            <div class="img-post">
                                <img src="${postElement.linkImg}" alt="">
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
    formPostElement.style.display = 'none';
    containerPostElement.style.display = 'block';
    navMobileElement.style.display = 'block';
});

function chooseFile(fileInput) {
    if(fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $(`#img-loading`).attr(`src`, e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

document.querySelector('#uploadImage').onchange = function() {
    chooseFile(this);
}

// uploadImageElement.onchange = function() {
//     var containersImgElement = document.querySelector(".containers-img");
//     console.log(uploadImageElement.value);
//     // containersImgElement.innerHTML = `<img src="uploadImageElement.value" alt="">`;
// }

// uploadImageElement.addEventListener("change", (e) => {
//     var containersImgElement = document.querySelector(".containers-img");
//     if (e.target.files.length) {
//       const src = URL.createObjectURL(e.target.files[0]);
//       console.log(src);
//       containersImgElement.innerHTML = `<img src="${src}" alt="">`;
//     }
//   });