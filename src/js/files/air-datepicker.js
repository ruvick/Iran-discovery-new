// Подключение функционала
import AirDatepicker from 'air-datepicker';

// Подключение стилей
import 'air-datepicker/air-datepicker.css';
//========================================================================================================================================================

// new AirDatepicker('#input', {
// 	range: true,
// 	multipleDatesSeparator: ' - '
// });

// let buttonAir = {
// 	content: 'درخواست کنید',
// 	className: 'custom-button-classname',
// 	onClick: (dp) => {
// 		let date = new Date('2021-07-26');
// 		dp.selectDate(date);
// 		dp.setViewDate(date);
// 	}
// }

// new AirDatepicker('.detail-calendar', {
// 	// locale: localeEn,
// 	range: true,
// 	multipleDatesSeparator: ' - ',
// 	buttons: [buttonAir, 'clear']
// })

new AirDatepicker('.tour-booking-calendar', {
	range: true,
	multipleDatesSeparator: ' - ',
	buttons: [
		{
			content: 'درخواست کنید',
			className: 'custom-button-classname',
			onClick: (dp) => {
				dp.selectDate(new Date());
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
		dateFormat: 'MM/dd/yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
})

// new AirDatepicker('.hotel-reservation-calendar', {
// 	range: true,
// 	language: 'en',
// 	multipleDatesSeparator: ' - ',
// })

// new AirDatepicker('.hotel-reservation-calendar-2', {
// 	range: true,
// 	multipleDatesSeparator: ' - ',
// })

// new AirDatepicker('.guide-calendar', {
// 	range: true,
// 	multipleDatesSeparator: ' - ',
// })


// $('.tour-booking-calendar').datepicker({
// 	language: 'en',
// 	minDate: new Date()
// })