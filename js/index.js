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

burgerMenu.addEventListener('click', function() {
	burgerPopup.classList.toggle('active');
	indexMain.classList.toggle('active');
	console.log(burgerMenu)
})

mainMenuItems.forEach(menu => {
	menu.onclick = function() {
		if (burgerPopup.classList.contains('active')) {
            burgerMenu.click();
        }
	}
})

indexMain.onclick = function() {
	if (burgerPopup.classList.contains('active')) {
            burgerMenu.click();
        }
}

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


// ANIMATION

const preAnimated = document.querySelectorAll('.pre-animated');

let animationCounter = true;

window.addEventListener('scroll', scrollAnimation);
function scrollAnimation() {
	for (let i = 0; i < preAnimated.length; i++) {
		const itemToAnimate = preAnimated[i];
		const itemHight = itemToAnimate.offsetHeight;
		const itemOffset = offset(itemToAnimate).top;
		const itemStart = 10;

		let itemToAnimatePlace = window.innerHeight - itemHight / itemStart;
		if (itemHight > window.innerHeight) {
			itemToAnimatePlace = window.innerHeight - window.innerHeight / itemStart;
		}

		if ((pageYOffset > itemOffset - itemToAnimatePlace) && (pageYOffset < (itemOffset + itemToAnimatePlace))) {
			itemToAnimate.classList.add('animated');
			if (itemToAnimate.classList.contains('uncounted-percent')) {
				countStatsPercent();
			}
			if (itemToAnimate.classList.contains('uncounted-stat')) {
				countStats();
			}
		}
	}

	function offset(element) {
		const rect = element.getBoundingClientRect();
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
}

function countPercent(num, place) {
	const time = 2000;
	const step = 5;

	let start = 0;

	let object = document.querySelector(place);
	let iterations = Math.round(time / (num / step));

	let interval = setInterval(() => {
		start += step;
		if (start == num) {
			clearInterval(interval);
		}
		object.innerHTML = start + '%';
	}, iterations);
}

function countNumber(num, place) {
	const time = 2000;
	const step = 5;

	let start = 0;

	let object = document.querySelector(place);
	let iterations = Math.round(time / (num / step));

	let interval = setInterval(() => {
		start += step;
		if (start == num) {
			clearInterval(interval);
		}
		object.innerHTML = start;
	}, iterations);
}

function countStatsPercent() {
	countPercent(80, '.capabilities_softwear .capabilities__percent');
	countPercent(90, '.capabilities_graphic .capabilities__percent');
	countPercent(85, '.capabilities_game .capabilities__percent');
	countPercent(100, '.capabilities_web .capabilities__percent');
	document.querySelector('.capabilities__list').classList.remove('uncounted-percent')
}

function countStats() {
	countNumber(120, '.capabilities_experts .capabilities__number');
	countNumber(500, '.capabilities_strategies .capabilities__number');
	countNumber(345, '.capabilities_results .capabilities__number');
	countNumber(120, '.capabilities_rankings .capabilities__number');
	document.querySelector('.capabilities__stats').classList.remove('uncounted-stat')
}


scrollAnimation();
