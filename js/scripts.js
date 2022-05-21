$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Наши преподаватели
	if ($('.teachers .swiper-container').length) {
		const teachersThumbs = new Swiper('.teachers .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.thumbs-swiper-button-next',
				prevEl: '.thumbs-swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1188: {
					spaceBetween: 29,
					slidesPerView: 3
				}
			}
		})

		new Swiper('.teachers .cont > .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: teachersThumbs
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.teachers'),
						currentIndex = swiper.realIndex + 1,
						totalIndex = $(swiper.$el).find('.slide:not(.swiper-slide-duplicate)').length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.teachers'),
						currentIndex = swiper.realIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!fiestResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			fiestResize = true
		} else {
			fiestResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})