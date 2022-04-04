$(window).load(function(){


	$('.mobile_btn').toggle(function(){
		$('.mb_menu').css('opacity','1');
		$('.mb_menu').css('z-index','999');
		$('.mb_box').css('left','0px');
		$('.mobile_btn').addClass('mobile_btn_over');
		$('.line1').addClass('line11');
		$('.line2').addClass('line22');
		$('.line3').addClass('line33');
	},function(){
		$('.mb_menu').css('opacity','0');
		$('.mb_menu').css('z-index','-1');
		$('.mb_box').css('left','-260px');
		$('.mobile_btn').removeClass('mobile_btn_over');
		$('.line1').removeClass('line11');
		$('.line2').removeClass('line22');
		$('.line3').removeClass('line33');
	});

	// 개인정보 수집 동의 팝업
	$('.agree_popup').hide();
	$('.agree_popup_btn').click(function(){
		$('.agree_popup').fadeIn('');
		return false;
	});

	$('.modal_close').click(function(){
		$('.agree_popup').fadeOut('');
		return false;
	});

	// 모바일 성공창업문의 팝업
	$('.open_inquire').click(function(){
		$('.inquire_popup').fadeIn('');
		$('body').css('overflow','hidden');
		return false;
	});

	$('.close_popup').click(function(){
		$('.inquire_popup').fadeOut('');
		$('body').css('overflow','auto');
		return false;
	});

});