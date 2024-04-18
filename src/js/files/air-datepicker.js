// Подключение функционала
import AirDatepicker from 'air-datepicker';
// Подключение стилей
import 'air-datepicker/air-datepicker.css';

// import localeEn from 'air-datepicker/locale/en';
//========================================================================================================================================================

// new AirDatepicker('#input', {
// 	range: true,
// 	multipleDatesSeparator: ' - '
// });

let buttonAir = {
	content: 'درخواست کنید',
	className: 'custom-button-classname',
	onClick: (dp) => {
		let date = new Date('2021-07-26');
		dp.selectDate(date);
		dp.setViewDate(date);
	}
}

new AirDatepicker('.detail-calendar', {
	// locale: localeEn,
	range: true,
	multipleDatesSeparator: ' - ',
	buttons: [buttonAir, 'clear']
})

new AirDatepicker('.tour-booking-calendar', {
	// inline: true
	// language: 'en',
	// minDate: new Date()
})

new AirDatepicker('.hotel-reservation-calendar', {

})

new AirDatepicker('.hotel-reservation-calendar-2', {

})

new AirDatepicker('.guide-calendar', {

})

