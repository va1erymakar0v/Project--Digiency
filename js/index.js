// header

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

const indexMain = document.querySelector('.index-main');

burgerMenu.onclick = function() {
	burgerPopup.classList.toggle('active');
	indexMain.classList.toggle('active');
}

mainMenuItems.forEach(menu => {
	menu.onclick = function() {
		burgerMenu.click();
	}
})

// experience

const experienceMenu = document.querySelectorAll('.experience__section');
const experienceAll = document.querySelector('.experience-all');
const experienceGraphic = document.querySelector('.experience-graphic');
const experienceUx = document.querySelector('.experience-ux');
const experienceWeb = document.querySelector('.experience-web');
const experienceProjects = document.querySelectorAll('.experience__project');

experienceMenu.forEach(item => {
	item.addEventListener('click', function() {
		for (i = 0; i < experienceMenu.length; i++) {
			experienceMenu[i].classList.remove('active');
		}
		item.classList.add('active')
	})
})

function experienceFilter(filter) {
	experienceProjects.forEach(item => {
		if (item.classList.contains(filter)) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	})
}

experienceAll.onclick = function() {
	experienceFilter('experience__project')	
} 

experienceGraphic.onclick = function() {
	experienceFilter('project-graphic')
}

experienceUx.onclick = function() {
	experienceFilter('project-ux')
}

experienceWeb.onclick = function() {
	experienceFilter('project-web')
}


// feedback

let feedbackSliderOffset = 0;
let feedbackItems = document.querySelectorAll('.feedback__item').length;

const feedbackSliderLine = document.querySelector('.feedback__slider-line');


document.querySelector('.feedback__slider-next').addEventListener('click', function() {
	feedbackSliderOffset += 400;
	if (feedbackSliderOffset > 400 * feedbackItems - 400 * 3 + 1) {
		feedbackSliderOffset = 0;
	}
	feedbackSliderLine.style.left = -feedbackSliderOffset + 'px';
})

document.querySelector('.feedback__slider-prev').addEventListener('click', function() {
	feedbackSliderOffset -= 400;
	if (feedbackSliderOffset < 0) {
		feedbackSliderOffset = 400 * feedbackItems - 400 * 3;
	}	
	feedbackSliderLine.style.left = -feedbackSliderOffset + 'px';
})