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

const blogMain = document.querySelector('.blog-main');

burgerMenu.onclick = function() {
	burgerPopup.classList.toggle('active');
	blogMain.classList.toggle('active');
}

mainMenuItems.forEach(menu => {
	menu.onclick = function() {
		burgerMenu.click();
	}
})

// sidebar

const categoryBusiness = document.querySelector('.category-business');
const categoryIntroductions = document.querySelector('.category-introductions');
const categoryDesign = document.querySelector('.category-design');
const categoryUx = document.querySelector('.category-ux');
const categoryDevelopment = document.querySelector('.category-development');

categoryBusiness.querySelector('.categories__number').innerHTML = document.querySelectorAll('.business-idea').length + document.querySelectorAll('.business').length;
categoryIntroductions.querySelector('.categories__number').innerHTML = document.querySelectorAll('.introduction').length;
categoryDesign.querySelector('.categories__number').innerHTML = document.querySelectorAll('.graphic-design').length;
categoryUx.querySelector('.categories__number').innerHTML = document.querySelectorAll('.website-design').length;
categoryDevelopment.querySelector('.categories__number').innerHTML = document.querySelectorAll('.app-development').length;



const businessTag = document.querySelector('.business-tag');
const graphicDesignTag = document.querySelector('.graphic-design-tag');
const technologyTag = document.querySelector('.technology-tag');
const appDevelopmentTag = document.querySelector('.app-development-tag');
const websiteDesignTag = document.querySelector('.website-design-tag');
const businessIdeaTag = document.querySelector('.business-idea-tag');

const articles = document.querySelectorAll('.article');

function useTag(tag) {
	articles.forEach(article => {
		article.style.display = 'block';
	})
	articles.forEach(article => {
		if (article.classList.contains(tag)) {
			article.style.display = 'block';
		} else {
			article.style.display = 'none';
		}
	})
}

businessTag.onclick = function() {
	useTag('business');
}
graphicDesignTag.onclick = function() {
	useTag('graphic-design');
}
technologyTag.onclick = function() {
	useTag('technology');
}
appDevelopmentTag.onclick = function() {
	useTag('app-development');
}
websiteDesignTag.onclick = function() {
 	useTag('website-design');
}
businessIdeaTag.onclick = function() {
	useTag('business-idea');
}