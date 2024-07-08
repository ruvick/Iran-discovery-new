// Подключение функционала
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

			// Проверяем, если клик произошел на элементе с классом cat-button__input
			if (targetElement.closest('.cat-button__input')) {
				const controlPage = document.querySelector('.control-page');
				if (controlPage) {
					controlPage.classList.remove('_active');
					bodyUnlock();
				}
			}
			// // Popup чекбоксов END ========================================================================================================================================================

		}

	}

	// Reverse полей ввода
	let btnCity = document.getElementById('btnCity'); // Получаем кнопку по классу
	let inpRevOne = document.getElementById('rev1'); // Получаем первый инпут по id
	let inpRevTwo = document.getElementById('rev2'); // Получаем второй инпут по id

	if (btnCity) {
		btnCity.addEventListener('click', function () {
			if (inpRevOne && inpRevTwo) {
				let reverse = inpRevOne.value; // Сохраняем текущее значение первого инпута
				inpRevOne.value = inpRevTwo.value; // Присваиваем первому инпуту значение второго
				inpRevTwo.value = reverse; // Присваиваем второму инпуту сохраненное значение первого
			}
		});
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
	const quantityInput = document.querySelector('.quantity__input input');
	const quantityButtons = document.querySelectorAll('.quantity__button');

	if (inputGuests) {
		inputGuests.addEventListener('click', function () {
			numberGuests.classList.add('_active');
			setTimeout(function () {
				if (sidebarItemOver) {
					sidebarItemOver.style.overflow = 'visible';
				}
			}, 500);
		});

		inputGuests.addEventListener('keydown', function () {
			numberGuests.classList.add('_active');
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

				// Получаем значение из quantity
				let quantityValue = quantityInput.value;

				// Передаем текстовое значение и значение quantity в поле inputGuests
				inputGuests.value = `${quantityValue} بزرگسالان, ${option.textContent}`;

				// Закрываем numberGuests
				numberGuests.classList.remove('_active');
				if (sidebarItemOver) {
					sidebarItemOver.style.overflow = 'hidden';
				}
			});
		});

		document.addEventListener('click', function (event) {
			if (!numberGuests.contains(event.target) && !inputGuests.contains(event.target)) {
				numberGuests.classList.remove('_active');
				if (sidebarItemOver) {
					sidebarItemOver.style.overflow = 'hidden';
				}
			}
		});

		quantityButtons.forEach(button => {
			button.addEventListener('click', function () {
				let currentValue = parseInt(quantityInput.value);
				if (button.classList.contains('quantity__button_plus')) {
					if (currentValue < 50) { // Ограничение на максимум 50
						quantityInput.value = currentValue + 1;
					}
				} else if (button.classList.contains('quantity__button_minus') && currentValue > 1) {
					quantityInput.value = currentValue - 1;
				}
				// Принудительно обновляем значение в поле inputGuests
				setTimeout(() => {
					inputGuests.value = `${quantityInput.value} بزرگسالان, ${selectContent.textContent}`;
					// inputGuests.value = `${selectContent.textContent}, ${quantityInput.value} بزرگسالان`;
				}, 0);
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


// Forms ===============================================================

// Ограничение по вводу числа. Не более 50 
const numberGuestsInput = document.getElementById("numberGuests");

if (numberGuestsInput) {
	numberGuestsInput.addEventListener("input", function () {
		let value = parseInt(numberGuestsInput.value, 10);

		if (value > 50) {
			numberGuestsInput.value = 50;
		} else if (value < 1) {
			numberGuestsInput.value = 1;
		}
	});
}
// Forms End ===============================================================