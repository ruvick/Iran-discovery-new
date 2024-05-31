/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/ 
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.swiper')) {

		new Swiper('.main-banner', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 2000,
			centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			// breakpoints: {
			// 	414: {
			// 		slidesPerView: 1.8,
			// 		// spaceBetween: 0,
			// 		// autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2.6,
			// 		spaceBetween: 20,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1024: {
			// 		slidesPerView: 3.5,
			// 		// centeredSlides: true,
			// 	},
			// 	1280: {
			// 		slidesPerView: 4,
			// 		centeredSlides: false,
			// 	},
			// },
			// События
			on: {

			}
		});

		new Swiper('.partners__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 9,
			autoHeight: true,
			speed: 800,
			centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			breakpoints: {
				414: {
					slidesPerView: 1.8,
					// spaceBetween: 0,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2.6,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3.5,
					// centeredSlides: true,
				},
				1280: {
					slidesPerView: 4,
					centeredSlides: false,
				},
			},
			// События
			on: {

			}
		});

		new Swiper('.hotels-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.hotels-slider__button-prev',
				nextEl: '.hotels-slider__button-next',
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.tours-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tours-slider__button-prev',
				nextEl: '.tours-slider__button-next',
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.events-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.events-slider__button-prev',
				nextEl: '.events-slider__button-next',
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.articles-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.articles-slider__button-prev',
				nextEl: '.articles-slider__button-next',
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.regions__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.regions__button-prev',
				nextEl: '.regions__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.regions__slider--dooble', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			pagination: {
				el: '.typical-slider__swiper-pagination--dooble',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.regions__button-prev',
				nextEl: '.regions__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.tour-article__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

		new Swiper('.articles-detail-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8.5,
			centeredSlides: true,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.articles-slider__button-prev',
				nextEl: '.articles-slider__button-next',
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 15,

				},
				992: {
					slidesPerView: 1.8,
					// centeredSlides: false,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});