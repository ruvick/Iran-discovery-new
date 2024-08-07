// Подключение функционала
import AirDatepicker from 'air-datepicker';

// Подключение стилей
import 'air-datepicker/air-datepicker.css';
//========================================================================================================================================================

new AirDatepicker('.calendar', {
	range: true,
	multipleDatesSeparator: ' - ',
	autoClose: true,
	dateFormat: 'yyyy-MM-dd',
	// Добавьте другие настройки по необходимости
	buttons: [
		{
			content: 'درخواست کنید',
			className: 'custom-button-classname',
			onClick: (dp) => {
				// dp.selectDate(new Date());
				dp.hide(); // Скрыть календарь после выбора даты
			}
		},
		'clear'
	],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'درخواست کنید',
		clear: 'پرتاب کردن',
		dateFormat: 'MM.dd.yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
})

new AirDatepicker('.calendar-2', {
	range: true,
	multipleDatesSeparator: ' - ',
	autoClose: true,
	dateFormat: 'yyyy-MM-dd',
	buttons: [
		{
			content: 'درخواست کنید',
			className: 'custom-button-classname',
			onClick: (dp) => {
				// dp.selectDate(new Date());
				dp.hide(); // Скрыть календарь после выбора даты
			}
		},
		'clear'
	],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'درخواست کنید',
		clear: 'پرتاب کردن',
		dateFormat: 'MM.dd.yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
})

new AirDatepicker('.calendar-3', {
	range: true,
	multipleDatesSeparator: ' - ',
	autoClose: true,
	dateFormat: 'yyyy-MM-dd',
	buttons: [
		{
			content: 'درخواست کنید',
			className: 'custom-button-classname',
			onClick: (dp) => {
				// dp.selectDate(new Date());
				dp.hide(); // Скрыть календарь после выбора даты
			}
		},
		'clear'
	],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'درخواست کنید',
		clear: 'پرتاب کردن',
		dateFormat: 'MM.dd.yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
})

new AirDatepicker('.calendar-4', {
	range: true,
	multipleDatesSeparator: ' - ',
	autoClose: true,
	dateFormat: 'yyyy-MM-dd',
	buttons: [
		{
			content: 'درخواست کنید',
			className: 'custom-button-classname',
			onClick: (dp) => {
				// dp.selectDate(new Date());
				dp.hide(); // Скрыть календарь после выбора даты
			}
		},
		'clear'
	],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'درخواست کنید',
		clear: 'پرتاب کردن',
		dateFormat: 'MM.dd.yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
})
