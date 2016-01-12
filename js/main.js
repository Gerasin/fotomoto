$(document).ready(function(){

	$('.sl').slick({
	  dots: false,
	  centerMode: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 4,
	  variableWidth: true,
	  touchMove: true,
	  initialSlide: 3
	});
	$('.sl-r').click(function(){
		$('.sl .slick-next').click();
		return false;
	});
	$('.sl-l').click(function(){
		$('.sl .slick-prev').click();
		return false;
	});

	$('.ph-sl').slick({
	  centerMode: true,
	  dots: false,
	  infinite: true,
	  speed: 100,
	  slidesToShow: 1,
	  slidesToScroll: 5,
	  variableWidth: true,
	  touchMove: true,
	  initialSlide: 3
	});



	$('.ph-r').click(function(){
		$('.ph-sl .slick-next').click();
		return false;
	});
	$('.ph-l').click(function(){
		$('.ph-sl .slick-prev').click();
		return false;
	});

	// input placeholder
	$('.form-inp .form-placeholder').click(function(){
		if(!$(this).parent('.form-inp').hasClass('active')) {
			$(this).parent('.form-inp').addClass('active');
			$(this).parent('.form-inp').find('input').focus();
		}
	});
	$('.form-inp input').focusout(function(){
		var inpuTxt = $(this).val();
		inpuTxt = inpuTxt.length;
		if(inpuTxt == 0) {
			$(this).parents('.form-inp').removeClass('active');
		};
	});
	
	$('.form-inp input').each(function(){
		var inpuTxt = $(this).val();
		inpuTxt = inpuTxt.length;
		if(inpuTxt > 0) {
			$(this).parents('.form-inp').addClass('active');
		};
	});
	$('.form-input textarea').each(function(){
		var inpuTxt = $('.form-input textarea').val();
		inpuTxt = inpuTxt.length;
		if(inpuTxt > 0) {
			$(this).parents('.form-textarea').addClass('active');
		};
	});
	$('.form-inp input').focus(function(){
		$(this).parents('.form-inp').addClass('active');
	});
	$('.form-textarea textarea').focus(function(){
		$(this).parents('.form-textarea').addClass('active');
	});

	if($('.form-input textarea').length) {
		$('.form-input textarea').autosize()
	};
	if($('.textarea-form').length) {
		$('.textarea-form').autosize()
	};

	if($('.gallery-sl').length) {
		$('.gallery-sl').jcarousel()
		 $('.prev-navigation')
	        .on('jcarouselcontrol:inactive', function() {
	            $(this).addClass('inactive');
	        })
	        .on('jcarouselcontrol:active', function() {
	            $(this).removeClass('inactive');
	        })
	        .jcarouselControl({
	            target: '-=6'
	        });

    $('.next-navigation')
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=6'
        });
    };

    $('.gallery-sl-for .gal_box:not(:first)').hide();
    $('.gallery-sl li:first').addClass('active');
    $('.gallery-sl li').click(function(){
    	$('.gallery-sl-for .gal_box').hide();
    	var index = $(this).index();
    	$('.gallery-sl-for .gal_box').eq(index).show();
    	$('.gallery-sl li').removeClass('active');
    	$(this).addClass('active');
    });

    $('.photo-filter a.select-open').click(function(){
    	if($('.filter-select').hasClass('active')) {
    		$(this).parents('.filter-select').removeClass('active');
    		$(this).parents('.filter-select').find('ul').hide();
    		console.log('da');
    	} else {
    		$(this).parents('.filter-select').addClass('active');
    		$(this).parents('.filter-select').find('ul').show();
    	};
    	return false;
    });
    $('.filter-select ul li a').click(function(){
    	$(this).parents('.filter-select').toggleClass('active');
    	$(this).parents('.filter-select').find('ul').toggle();
    	var selectThis = $(this).text();
    	$('.select-open em').text(selectThis);
    	$('.filter-select ul li').removeClass('act');
    	$(this).parent('li').addClass('act');
    	return false;
    })

	$('.cat-filter a').click(function(){
		$('.cat-filter a').removeClass('active');
		$(this).addClass('active');
		return false;
	});


    // Скрытие попапа
    $('.your_password a').click(function(){
    	$('.popup-tab').hide();
    	$('.popup-tab-pass').fadeIn();
    	return false;
    });
    $('.log-open').click(function(){
    	$('.popup-tab').show();
    	$('.popup-tab-pass').hide();
    });

    // Добовление картинок
    if($('.dragover-photo').length) {
	    $(".dragover-photo").dropzone({ 
	    	url: "upload.php",
	    	previewsContainer: ".grid",
	    	iconFiletypes: ['.jpg', '.png', '.gif'],
	    	showFiletypeIcon: true
	    })
    };


    $('.add-file-lnk').click(function(){
    	$('.dropzone').click();
    });

    $('.js-message').click(function(){
    	$('.form-message').fadeIn();
    	setTimeout("$('.form-message').fadeOut();", 5000);
    	return false;
    });

    $('.form-message .message-close').click(function(){
    	$('.form-message').fadeOut();
    	return false;
    });

    $('.reg-message .message-close').click(function(){
    	$('.reg-message').fadeOut();
    	return false;
    });


    // Модальное окно
    centerModals();


    $('.lnk-reply').click(function(){
    	$('html, body').animate( { scrollTop: 2000 }, 1100 );
    	$(this).parents('.media-list').find('.textarea-form').focus();
    	return false;
    });


    $('.photo-item .photo-close').click(function(){
    	$(this).parents('.photo-item').remove();
    	$grid.isotope('layout');
    	return false;
    });


	if($('.grid').length) {
	  var $grid = $('.grid').isotope({
	    itemSelector: '.grid-item',
	    percentPosition: true,
	    resizable : true,
	    transformsEnabled : true
	  });
	};


	$('.insert-button').click(function() {

	  	$grid.isotope('destroy');
	  	$('.grid').isotope({
		    itemSelector: '.grid-item',
		    percentPosition: true,
		    resizable : true,
		    transformsEnabled : true
		});
	    return false;
	});

	$('.dz-remove').click(function(){
		$grid.isotope('layout');
	});
	$('.isotope-reset').click(function(){
		$grid.isotope('layout');
	});


	// Смена аваторки
	$('.profile-ava a').click(function(){
	  	$('#uploader').click();
	  	return false;
	});

	if($('.select').length) {
		$('.select').selectik({
			minScrollHeight: 20
		})
	};


	$('.faq-header a').click(function(){
		if($(this).parents('.faq-cont').hasClass('active')) {
			$('.faq-cont').removeClass('active');
			$('.faq-txt').slideUp();
		} else {
			$('.faq-cont').removeClass('active');
			$('.faq-txt').slideUp();
			$(this).parents('.faq-cont').addClass('active');
			$(this).parents('.faq-cont').find('.faq-txt').slideDown();
		};
		return false;
	})
	
	

});

$(window).load(function(){
	if($('.grid').length) {
	  var $grid = $('.grid').isotope({
	    itemSelector: '.grid-item',
	    percentPosition: true,
	    resizable : true,
	    transformsEnabled : true
	  });
	};
});

function getItemElement() {
  var $item = $('.dz-preview');
  return $item;
}




function centerModals(){
  	$('.modal').each(function(i){
    	var $clone = $(this).clone().css('display', 'block').appendTo('body');
    	var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2 - 33);
    	top = top > 0 ? top : 0;
    	$clone.remove();
    	$(this).find('.modal-content').css("margin-top", top);
  	});
};



$(document).mouseup(function(e){
	// Закрытие попапа мини
  	var container = $(".filter-select"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
   		$('.filter-select').removeClass('active');
      	$('.filter-select').find('ul').hide();
   		popupStatusMin = 0;
  	}


  	$('.form-textarea textarea').focusout(function(){
		var inpuTxt = $(this).val();
		inpuTxt = inpuTxt.length;
		if(inpuTxt == 0) {
			$(this).parents('.form-textarea').removeClass('active');
		};
	});
}); 
$('body').bind( "touchend", function(e){
    // Закрытие попапа мини
  	var container = $(".filter-select"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
   		$('.filter-select').removeClass('active');
      	$('.filter-select').find('ul').hide();
   		popupStatusMin = 0;
  	}
});

