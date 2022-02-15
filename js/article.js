// check theme

const themeButton = document.querySelector('.navigation__theme');

function changeTheme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('style', 'dark');
    } else {
      localStorage.setItem('style', 'light');
    }
}

themeButton.onclick = changeTheme;

if (localStorage.getItem('style') == 'dark') {
    changeTheme();
}

const burgerMenu = document.querySelector('.navigation__burger');
const burgerPopup = document.querySelector('.navigation__list');
const mainMenuItems = document.querySelectorAll('.navigation__item');

const articleMain = document.querySelector('.article-main');

burgerMenu.onclick = function() {
    burgerPopup.classList.toggle('active');
    articleMain.classList.toggle('active');
}

mainMenuItems.forEach(menu => {
    menu.onclick = function() {
        burgerMenu.click();
    }
})

// comment

const commentForm = document.querySelector('.comments__form');
const comment = document.querySelector('.comments__comment');

const comments = document.querySelector('.comment');

function submitEmulation(text) {
    let newComment = document.createElement('div')
    comments.prepend(newComment);
    newComment.classList.add('comment__item');
    newComment.classList.add('comment_main');
    let newAvatar = document.createElement('img');
    newComment.append(newAvatar);
    newAvatar.classList.add('comment__image');
    newAvatar.src = 'images/blog-page/comment-guest.jpg';

    let newField = document.createElement('div');
    newField.classList.add('comment__data')
    newComment.append(newField);

    let newName = document.createElement('span');
    newField.append(newName);
    newName.classList.add('comment__author')
    newName.innerHTML = 'Anonimous Guest'
    let newText = document.createElement('span');
    newField.append(newText);
    newText.classList.add('comment__text')
    newText.innerHTML = text;


    let newReactions = document.createElement('div');
    newField.append(newReactions);
    newReactions.classList.add('comment__reactions')
    let newDislike = document.createElement('span');
    newReactions.append(newDislike);
    newDislike.classList.add('comment__dislike');
    let newLikes = document.createElement('span');
    newReactions.append(newLikes);
    newLikes.classList.add('comment__likes');
    newLikes.innerHTML = 1;
    let newLike = document.createElement('span');
    newReactions.append(newLike);
    newLike.classList.add('comment__like')

}


comment.addEventListener('keypress', function (e) {
    if(e.which === 13 && !e.shiftKey) {
        commentForm.submit();
        submitEmulation(comment.value);
        comment.value = ""
    }
})


const commentDislike = document.querySelectorAll('.comment__dislike');
const commentLike = document.querySelectorAll('.comment__like');

commentDislike.forEach(dislike => {
    dislike.onclick = function() {
        if (dislike.parentNode.querySelector('.comment__like').disabled == true) {
            dislike.parentNode.querySelector('.comment__likes').innerHTML = Number(dislike.parentNode.querySelector('.comment__likes').innerHTML) - 1;
            dislike.parentNode.querySelector('.comment__like').disabled = false;
        } else {
            dislike.parentNode.querySelector('.comment__likes').innerHTML = Number(dislike.parentNode.querySelector('.comment__likes').innerHTML) - 1;
            dislike.parentNode.querySelector('.comment__dislike').disabled = true;
        }
    }
})

commentLike.forEach(like => {
    like.onclick = function() {
        if (like.parentNode.querySelector('.comment__dislike').disabled == true) {
            like.parentNode.querySelector('.comment__likes').innerHTML = Number(like.parentNode.querySelector('.comment__likes').innerHTML) + 1;
            like.parentNode.querySelector('.comment__dislike').disabled = false;
        } else {
            like.parentNode.querySelector('.comment__likes').innerHTML = Number(like.parentNode.querySelector('.comment__likes').innerHTML) + 1;
            like.parentNode.querySelector('.comment__like').disabled = true;
        }
    }
})
