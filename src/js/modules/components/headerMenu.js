//================================================================================

// .menu-toggle--open - для кнопки открытия меню
// .menu--open - для меню

import { focusTrap, scrollLockToggle } from "../functions.js";

export function headerMenu() {
	const menuToggle = document.querySelector('.menu-toggle');
	if (menuToggle) {
		const header = document.querySelector('.header');
		const menu = header.querySelector('.menu');
		header.addEventListener('click', menuStyles);
		function menuStyles(e) {
			// Проверка на якорные ссылки в меню
			const isBurgerLink = (
				// Если ссылка меню
				(e.target.classList.contains('menu__link')) &&
				// Если меню открыто
				(menuToggle.classList.contains('menu-toggle--open')) &&
				// Если не ведет на другую страницу
				(!e.target.getAttribute('href').endsWith('html'))
			);
			if (e.target === menuToggle || e.key === 'Escape' || isBurgerLink) {
				let expanded = 'false' === menuToggle.getAttribute('aria-expanded');
				menuToggle.setAttribute('aria-expanded', expanded);
				if (!expanded) {
					menuToggle.setAttribute('aria-label', 'Open menu');
					document.removeEventListener('keydown', menuKeyboard);
				} else {
					menuToggle.setAttribute('aria-label', 'Close menu');
					document.addEventListener('keydown', menuKeyboard);
				}
				menuToggle.classList.toggle('menu-toggle--open');
				menu.classList.toggle('menu--open');
				scrollLockToggle();
			}
		}
		function menuKeyboard(e) {
			if (e.key === 'Escape') {
				menuStyles(e);
				menuToggle.focus();
			}
			if (e.key === 'Tab' || e.shiftKey && e.key === 'Tab') {
				focusTrap(e, menu, e.shiftKey && e.key === 'Tab', true, menuToggle);
			}
		}
	}
}

headerMenu();
//================================================================================