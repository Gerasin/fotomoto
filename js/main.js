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
    		$(this).parents('.filter-select').find('.filter-scroll').hide();
    		console.log('da');
    	} else {
    		$(this).parents('.filter-select').addClass('active');
    		$(this).parents('.filter-select').find('.filter-scroll').show();
    	};
    	return false;
    });
    $('.filter-select ul li a').click(function(){
    	$(this).parents('.filter-select').toggleClass('active');
    	$(this).parents('.filter-select').find('.filter-scroll').toggle();
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
    	$(this).parents('.photo-item').hide();
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
			maxItems: 6
		})
	};

	if($('.filter-scroll').length) {
		$('.filter-scroll').jScrollPane();
		$('.filter-scroll').hide();
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
	});

	// Ввод названия
	$('.img-name-edit strong, .img-name-edit i').click(function(){
		var editTxt = $(this).parents('.img-name-edit').find('strong').html();
		editTxt = editTxt.replace(/<br>/g, '\n');
		$(this).parents('.img-name-edit').find('textarea').val(editTxt);
		$(this).parents('.img-name-edit').find('textarea').show();
		$(this).parents('.img-name-edit').find('i').hide();
		$(this).parents('.img-name-edit').find('textarea').focus();
	});
	$('.img-name-edit textarea').keyup(function(){
		var editTxt = $(this).val();
		editTxt = editTxt.replace(/\n/g, '<br>');
		$(this).parents('.img-name-edit').find('strong').html(editTxt);
		var txtHeight = $(this).parents('.img-name-edit').find('strong').height();
		$(this).height(txtHeight);
	});

	var editName = function() {
		$('.grid-txt, .grid-info i').click(function(){
			var editTxt = $(this).parents('.grid-info').find('.grid-txt').html();
			editTxt = editTxt.replace(/<br>/g, '\n');
			$(this).parents('.grid-info').find('textarea').val(editTxt);
			$(this).parents('.grid-info').find('textarea').show();
			$(this).parents('.grid-info').find('i').hide();
			$(this).parents('.grid-info').find('textarea').focus();
			var thisHeight = $(this).parents('.grid-info').find('.grid-txt').height();
			$(this).parents('.grid-info').find('textarea').height(thisHeight);
		});
		$('.grid-info textarea').keyup(function(){
			var editTxt = $(this).val();
			editTxt = editTxt.replace(/\n/g, '<br>');
			$(this).parents('.grid-info').find('.grid-txt').html(editTxt);
			var txtHeight = $(this).parents('.grid-info').find('.grid-txt').height();
			$(this).height(txtHeight);
		});

		$('.grid-item, .photograf-pad .col-sm-2').hover(function(){},
		function(){
			$('.grid-info textarea').hide();
			$('.grid-info i').css({'display' : 'inline-block'});
		});
	};

	$('.grid-item').unbind('mouseenter mouseleave', editName);
    $('.grid-item').bind('mouseenter mouseleave', editName);
    $('.photograf-pad .col-sm-2').unbind('mouseenter mouseleave', editName);
    $('.photograf-pad .col-sm-2').bind('mouseenter mouseleave', editName);

    // Смена болшой картинке по клику на нее
    $('.big-img img').click(function(){
    	$('.gallery-sl li.active').next('li').find('img').click();
    });


    // Добовление инпута
    $('.inp-sk-plus').click(function(){
    	var inpHtml = $('.form-inp-hide').html();
    	$('.inp-sk-add').append(inpHtml);
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

	var imgeight = $('#profile-avatar').height();
	if(imgeight < 150) {
		$('#profile-avatar').css({'width' : 'auto'});
		$('#profile-avatar').css({'height' : 150 + 'px'});
	};


	$('.media a.pull-left').each(function(){
		$(this).find('img').addClass('active');
		var imgMax = $(this).width();
		var imgHeight = $(this).find('img').height();
		if(imgHeight < imgMax) {
			$(this).find('img').css({'width' : 'auto'});
			$(this).find('img').css({'height' : imgMax + 'px'});
		};
	});

	$('.photographers-ava').each(function(){
		var imgMax = $(this).width();
		var imgHeight = $(this).find('img').height();
		if(imgHeight < imgMax) {
			$(this).find('img').css({'width' : 'auto'});
			$(this).find('img').css({'height' : imgMax + 'px'});
		};
	});

	$('.lnk-delet').click(function(){
		$(this).parent('p').parent('.media-body').parent('.media').hide();
		return false;
	});

	var editTxt = $('.profile-comment').text();
	editTxt = editTxt.replace(/\n/g, '<br>');
	$('.profile-comment').html(editTxt);
	$('.profile-comment br:first').hide();


	// Выбор фото дня
	$('.photo_day a').click(function(){
		if(!$(this).parent().hasClass('active')) {
			$('.photo_day').removeClass('active');
			$(this).parent().addClass('active');
		} else {
			$('.photo_day').removeClass('active');
		}
		return false;
	})

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
      	$('.filter-select').find('.filter-scroll').hide();
   		popupStatusMin = 0;
  	};

  	var container2 = $(".img-name-edit"); 
  		if (!container2.is(e.target) && container2.has(e.target).length === 0){
   		$('.img-name-edit textarea').hide();
		$('.img-name-edit i').css({'display' : 'inline-block'});
   		popupStatusMin = 0;
  	};




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
      	$('.filter-select').find('.filter-scroll').hide();
   		popupStatusMin = 0;
  	}
});



