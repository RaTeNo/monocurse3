$(() => {
	$(".guide-card_item").on("click", function(e){
		let title = $(this).data("title");
		if(title!="")
		{
			$("#modal .modal_form-title").text(title);
		}
	});
	
	$(".scroll").on("click", function(e){
    	e.preventDefault();
    	let id = $(this).attr("href");
    	$(".scroll").removeClass("active");
    	$(this).addClass("active");

    	$(".guide-list").prepend($(id));    	

    	$("html, body").animate({
	         scrollTop: $(".content_flex").offset().top + "px"
	     }, {
	         duration: 300,
	         easing: "swing"
	    });
    });

    
	$(".definition .more").on('click', function(e) {
		e.preventDefault()
		$(this).hide();
		$(".hide_text").slideDown();
	});

	// Фильтр
	$('body').on('click', '.mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .filter_title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
	})


	$('body').on('click', '.search-result_item button', function(e) {
		e.preventDefault();
		$(this).parent().hide();
		let id = $(this).parent().data("id");
		$("input[id='"+id+"']").prop("checked", false);
		if($(".search-result .search-result_item:visible").length==0)
		{
			$(".search-result .reset").hide();
		}
	});

	$(".search-result .reset").on('click', function(e) {
		$(this).hide();
		$(".search-result_item").hide();
		$(".filter").trigger("reset");
	});

	$(".submit-mob .reset").on('click', function(e) {		
		$(".search-result_item").hide();
		$(".filter").trigger("reset");
	});


	$(".filter input").on("change", function(){	
		if($(this).prop("checked"))
		{
			let name = $(this).next().text();
			if(name=="")
			{
				name = $(this).prev().text();
			}

			$(".search-result .reset").before('<div class="search-result_item" data-id="'+$(this).prop("id")+'"><span>'+name+'</span><button><img src="images/delete.png" alt=""></button></div>');
			$(".search-result .reset").show();
		}	
		else
		{
			let id = $(this).prop("id");
			console.log(".search-result_item[data-id='"+id+"']");
			$(".search-result_item[data-id='"+id+"']").hide();
			if($(".search-result .search-result_item:visible").length==0)
			{
				$(".search-result .reset").hide();
			}

		}
	});

	$(".show-more").on('click', function(e) {
		e.preventDefault()
		$(this).prev().find(".hide").show();
		$(this).hide();
	});


	$('select').niceSelect();


	$('.cats_title').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(this).next().slideUp();
		}	
		else
		{
			$(this).addClass("active");
			$(this).next().slideDown();
		}

	})



	const swiper = new Swiper('.hostel__content', {
		speed: 400,
		spaceBetween: 100,
		slidesPerView: 1,
		watchSlidesVisibility: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		loop: true,
		navigation: {
			nextEl: '.thumbs-swiper-button-next2',
			prevEl: '.thumbs-swiper-button-prev2'
		},
		breakpoints: {
			0: {
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				slidesPerView: 1
			},
			1023: {
				spaceBetween: 29,
				slidesPerView: 1
				
			}
		}
		
	});



})