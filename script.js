
$(document).ready(function () {

	// $('.main-thumb').slick({
	//   slidesToShow: 1,
	//   arrows:false,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   autoplaySpeed: 2000,
	//   infinite: true,
	//   asNavFor: '.slide'
	// });

	$('.slide').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		dots: true,
		focusOnSelect: true
	});

	$('.corusel-video_content').slick({
		centerMode: true,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2500,
		infinite: true,
		prevArrow: '<button id="prev-btn"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.4286L3.75 9L10 2.57143L8.75 0L0 9L8.75 18L10 15.4286Z" fill="#fff"/></svg></button>',
		nextArrow: '<button id="next-btn"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.4286L6.25 9L0 2.57143L1.25 0L10 9L1.25 18L0 15.4286Z" fill="#fff"/></svg></button>',
		responsive: [
			{
				breakpoint: 972,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '40px'
				},
			}
		]
	});

	$('.partners-corusel').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.4286L3.75 9L10 2.57143L8.75 0L0 9L8.75 18L10 15.4286Z" fill="#fff"/></svg></button>',
		nextArrow: '<button><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.4286L6.25 9L0 2.57143L1.25 0L10 9L1.25 18L0 15.4286Z" fill="#fff"/></svg></button>',
		responsive: [
			{
				breakpoint: 972,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]

	});


	// result slides

	$('.aside-result-thumb-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.aside-result-big-slide',
		prevArrow: '<button id="result-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.4286L3.75 9L10 2.57143L8.75 0L0 9L8.75 18L10 15.4286Z" fill="#fff"/></svg></button>',
		nextArrow: '<button id="result-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.4286L6.25 9L0 2.57143L1.25 0L10 9L1.25 18L0 15.4286Z" fill="#fff"/></svg></button>'
	});
	$('.aside-result-big-slide').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.aside-result-thumb-slide',
		focusOnSelect: true
	});
	// federation
	$('.federation-slider-block').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		prevArrow: '<button id="federation-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.4286L3.75 9L10 2.57143L8.75 0L0 9L8.75 18L10 15.4286Z" fill="#fff"/></svg></button>',
		nextArrow: '<button id="federation-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.4286L6.25 9L0 2.57143L1.25 0L10 9L1.25 18L0 15.4286Z" fill="#fff"/></svg></button>'
	});





	// burger
	$('.burger-btn').click(function (event) {
		$('.burger-menu').fadeToggle('slow/01/fast');
		$('body').toggleClass('lock');
	});

});
const mainItems = document.querySelectorAll(".main-countdown-item > h4");
let mainCountdownDate = new Date(2021, 8, 22, 22, 0, 0).getTime();
function getMainCountdownTime() {
	const mainNow = new Date().getTime();

	const mainDistance = mainCountdownDate - mainNow;


	const mainOneDay = 24 * 60 * 60 * 1000;
	const mainOneHour = 60 * 60 * 1000;
	const mainOneMinute = 60 * 1000;

	let mainDays = Math.floor(mainDistance / mainOneDay);
	let mainHours = Math.floor((mainDistance % mainOneDay) / mainOneHour);
	let mainMinutes = Math.floor((mainDistance % mainOneHour) / mainOneMinute);
	let mainSeconds = Math.floor((mainDistance % mainOneMinute) / 1000);

	if (mainDays < 10) {
		mainDays = '0' + mainDays;
	}
	if (mainHours < 10) {
		mainHours = '0' + mainHours;
	}
	if (mainMinutes < 10) {
		mainMinutes = '0' + mainMinutes;
	}
	if (mainSeconds < 10) {
		mainSeconds = '0' + mainSeconds;
	}
	const mainValues = [mainDays, mainHours, mainMinutes, mainSeconds];


	mainItems.forEach(function (item, mainIndex) {
		item.textContent = mainValues[mainIndex];
	})

}
// obnovlenie
let mainCountdown = setInterval(getMainCountdownTime, 1000);

// initsializaciya
getMainCountdownTime();




// -------------------------------------


const items = document.querySelectorAll(".countdown-item > h4");
let countdownDate = new Date(2021, 5, 22, 14, 0, 0).getTime();
function getCountdownTime() {
	const now = new Date().getTime();

	const distance = countdownDate - now;


	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	let days = Math.floor(distance / oneDay);
	let hours = Math.floor((distance % oneDay) / oneHour);
	let minutes = Math.floor((distance % oneHour) / oneMinute);
	let seconds = Math.floor((distance % oneMinute) / 1000);

	if (days < 10) {
		days = '0' + days;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}


	const values = [days, hours, minutes, seconds];


	items.forEach(function (item, index) {
		item.textContent = values[index];
	})

}
// obnovlenie
let countdown = setInterval(getCountdownTime, 1000);

// initsializaciya
getCountdownTime();


$('.header__menu ul li  a[href^="#"]').click(function () {
	var menuheight = 100;
	var target = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(target).offset().top - menuheight
	}, 500);
	$('.menu__links a[href^="#"]').removeClass('active-menu');
	$(this).addClass('active-menu')
	return false;
});