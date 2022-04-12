//================================================================================
import Swiper, { Navigation, Pagination, Thumbs, Controller } from 'swiper';

// Autoplay, Controller, Thumbs
// Mousewheel, Keyboard, FreeMode
// Navigation, Pagination, Scrollbar

import { isMobile } from './functions.js';

window.addEventListener("load", () => {
	setSliders();
	// setlSiderScroll();
});

function setSliders() {
	if (document.querySelector('.slider-hero')) {
		new Swiper('.slider-hero', {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				nextEl: '.slider-hero .swiper-button-next',
				prevEl: '.slider-hero .swiper-button-prev',
			},
			pagination: {
				el: '.slider-hero .swiper-pagination',
				bulletClass: 'slider-hero__bullet',
				bulletActiveClass: 'slider-hero__bullet--active',
				type: 'bullets',
				clickable: true
			},
			speed: 800,
		});
	}
	if (document.querySelector('.slider-projects')) {
		new Swiper('.slider-projects', {
			modules: [Navigation],
			navigation: {
				nextEl: '.slider-projects .swiper-button-next',
				prevEl: '.slider-projects .swiper-button-prev',
			},
			speed: 800,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
	if (document.querySelector('.slider-clients')) {
		new Swiper('.slider-clients', {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 60,
			navigation: {
				nextEl: '.slider-clients .swiper-button-next',
				prevEl: '.slider-clients .swiper-button-prev',
			},
			speed: 800,
		});
	}
	if (document.querySelector('.slider-gallery')) {
		const gallerySlider = new Swiper('.slider-gallery', {
			modules: [Navigation, Thumbs, Controller],
			slidesPerView: 1,
			spaceBetween: 60,
			navigation: {
				nextEl: '.slider-gallery .swiper-button-next',
				prevEl: '.slider-gallery .swiper-button-prev',
			},
			speed: 800,
			thumbs: {
				swiper: {
					el: '.slider-mini-gallery',
					breakpoints: {
						320: {
							slidesPerView: 3,
							spaceBetween: 5,
						},
						480: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 6,
							spaceBetween: 20,
						}
					},
				}
			}
		});
		if (document.querySelector('.slider-info-gallery')) {
			const galleryInfoSlider = new Swiper('.slider-info-gallery', {
				modules: [Navigation, Controller],
				slidesPerView: 1,
				spaceBetween: 80,
				speed: 800,
			});
			gallerySlider.controller.control = galleryInfoSlider;
			galleryInfoSlider.controller.control = gallerySlider;
		}
	}
	if (document.querySelector('.slider-history')) {
		const historyBlock = document.querySelector('.history');
		const historyButtons = historyBlock.querySelectorAll('.history__button');
		const historySlider = new Swiper('.slider-history', {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 60,
			navigation: {
				nextEl: '.slider-history .swiper-button-next',
				prevEl: '.slider-history .swiper-button-prev',
			},
			speed: 800,
			on: {
				init: function () {
					setButtons();
				},
				slideChange: function () {
					removeButtons();
					historyButtons[historySlider.realIndex].classList.add('active');
				}
			}
		});
		function setButtons() {
			if (historyButtons.length) {
				historyButtons.forEach((historyButton, index) => {
					historyButton.addEventListener('click', (e) => {
						removeButtons();
						historySlider.slideTo(index);
						historyButtons[historySlider.realIndex].classList.add('active');
						e.preventDefault();
					});
				});
			}
		}
		function removeButtons() {
			const buttonActive = historyBlock.querySelector('.history__button.active');
			if (buttonActive) {
				buttonActive.classList.remove('active');
			}
		}
	}
}
// function setlSiderScroll() {
// 	const wrapper = document.querySelector('.page');
// 	if (document.querySelector('.page')) {
// 		const pageSlider = new Swiper('.page', {
// 			modules: [Mousewheel, Keyboard, FreeMode],
// 			direction: 'vertical',
// 			speed: 900,
// 			mousewheel: true,
// 			slidesPerView: 'auto',
// 			keyboard: true,
// 			freeMode: false,
// 			init: false,
// 			on: {
// 				init: function () {
// 					setScrollType();
// 					setMenuLinks();
// 				},
// 				slideChange: function () {
// 					removeMenuLink();
// 					// Если после 0 блока и до футера
// 					if ((pageSlider.realIndex > 0) && (pageSlider.realIndex < menuLinks.length + 1)) {
// 						menuLinks[pageSlider.realIndex - 1].classList.add('active');
// 					}
// 				},
// 				resize: function () {
// 					setScrollType();
// 				}
// 			}
// 		});
// 		const menuLinks = document.querySelectorAll('.menu__link');
// 		function setMenuLinks() {
// 			if (menuLinks.length) {
// 				const menuLogo = document.querySelector('.header__logo');
// 				if (menuLogo) {
// 					menuLogo.addEventListener('click', (e) => {
// 						removeMenuLink();
// 						pageSlider.slideTo(0);
// 						e.preventDefault();
// 					});
// 				}
// 				menuLinks.forEach((menuLink, index) => {
// 					menuLink.addEventListener('click', (e) => {
// 						removeMenuLink();
// 						pageSlider.slideTo(index + 1);
// 						menuLinks[pageSlider.realIndex - 1].classList.add('active');
// 						e.preventDefault();
// 					});
// 				});
// 			}
// 		}
// 		function removeMenuLink() {
// 			const menuLinkActive = document.querySelector('.menu__link.active');
// 			if (menuLinkActive) {
// 				menuLinkActive.classList.remove('active');
// 			}
// 		}
// 		function setScrollType() {
// 			if (isMobile.any()) {
// 				pageSlider.params.freeMode.enabled = true;
// 			} else {
// 				if (wrapper.classList.contains('free')) {
// 					wrapper.classList.remove('free');
// 					pageSlider.params.freeMode.enabled = false;
// 				}
// 				for (let index = 0; index < pageSlider.slides.length; index++) {
// 					const pageSlide = pageSlider.slides[index];
// 					const pageSlideBody = pageSlide.querySelector('.swiper-slide__body');
// 					if (pageSlideBody) {
// 						const pageSlideBodyHeight = pageSlideBody.offsetHeight;
// 						// Если содержимое блока не помещается в экран
// 						if (pageSlideBodyHeight > window.innerHeight) {
// 							wrapper.classList.add('free');
// 							pageSlider.params.freeMode.enabled = true;
// 							break;
// 						}
// 					}
// 				}
// 			}
// 		}
// 		pageSlider.init();
// 	}
// }
//================================================================================