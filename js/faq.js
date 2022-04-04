$(function(){
	
	$('.faq_list .answer').hide(0);
	
	$('.faq_list .question').click(function(){
		if($(this).next('div').css("display")=="block") {
			$(this).next('div').hide();
		}else {
			$('.faq_list .question').next('div').hide();
			$(this).next('div').show();
		}
	})
});