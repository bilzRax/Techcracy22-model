let swiper = new Swiper(".mySwiper",{
	slidesPerView: 5,
	spaceBetween: 0,
	loop: true,
	speed: 2000,
	autoplay:{
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
})
