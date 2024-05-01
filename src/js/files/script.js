// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLock, bodyUnlock, removeClasses, _slideToggle } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//========================================================================================================================================================

// const controlPopupBtn = document.querySelector('.js-control-popup');
// const controlPagePopup = document.querySelector('.control-page-popup');

// if (controlPopupBtn) {
// 	controlPopupBtn.addEventListener("click", function (e) {
// 		if (controlPagePopup) {
// 			controlPagePopup.classList.toggle('_active');
// 			bodyLockToggle();
// 		}
// 	});
// }

window.onload = function () {

	document.addEventListener("click", documentActions);

	function documentActions(e) {

		const targetElement = e.target;

		if (window.innerWidth <= 540) {

			// Popup чекбоксов
			if (targetElement.classList.contains('js-control-popup') || targetElement.closest('.js-control-popup')) {
				targetElement.closest('.control-page').classList.toggle('_active');
				bodyLock();
			}

			const controlPagePopup = targetElement.closest('.control-page-popup');
			const controlPagePopupInner = targetElement.closest('.control-page-popup__inner');

			if (controlPagePopup && !controlPagePopupInner) {
				controlPagePopup.closest('.control-page').classList.remove('_active');
				bodyUnlock();
			}
			//========================================================================================================================================================

		}

		// Reverse полей ввода
		if (targetElement.classList.contains('btn-city') || targetElement.closest('.btn-city')) {
			targetElement.closest('.inputs-city').classList.toggle('_reverse')
		}

	}

	//========================================================================================================================================================

	let inputGuests = document.querySelector('.input-guests');
	let numberGuests = document.querySelector('.number-guests');
	let sidebarItemOver = document.querySelector('.sidebar-template__item--over');

	const selectOptions = document.querySelectorAll('.select__option');
	const itemResultText = document.querySelector('.item-result__text');
	const itemResult = document.querySelector('.item-result');
	const resultBtn = document.querySelector('.item-result__btn');
	const select = document.querySelector('.form');
	const selectContent = document.querySelector('.select__content');

	if (inputGuests) {
		inputGuests.addEventListener('input', function () {
			if (inputGuests.value > 1) {
				numberGuests.classList.add('_active');
			} else {
				numberGuests.classList.remove('_active');
			}
		});

		inputGuests.addEventListener('click', function () {
			setTimeout(function () {
				if (sidebarItemOver) {
					sidebarItemOver.style.overflow = 'visible';
				}
			}, 1500);
		});

		selectOptions.forEach(option => {
			option.addEventListener('click', function () {
				itemResultText.textContent = option.textContent;
				itemResult.classList.add('_active');
				select.value = option.getAttribute('data-value');
				selectContent.textContent = option.textContent;
			});
		});
	}

	if (resultBtn) {
		resultBtn.addEventListener("click", function (e) {
			itemResult.classList.remove('_active');
			itemResultText.textContent = "کودک 1 سال"; // Устанавливаем текст в .item-result__text
			select.value = '1'; // Устанавливаем значение селекта в '1'
			selectContent.textContent = document.querySelector('.select__option[data-value="1"]').textContent; // Обновляем отображаемое значение в .select__content
			numberGuests.classList.remove('_active');
			if (sidebarItemOver) {
				sidebarItemOver.style.overflow = 'hidden';
			}
			inputGuests.value = ''; // Обнуляем значение у .input-guests
		});
	}

}
//========================================================================================================================================================


