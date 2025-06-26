$(document).ready(function(){

	function resize_sreen(){
		$win_width=$(window).width();
		if($win_width>=1024){
			if($(".sticky").length){
				$(".sticky").stick_in_parent({
					inner_scrolling: false,
					bottoming: true,
					offset_top: 0
				});
			}
		}
		else{
			if($(".sticky").length){
				$(".sticky").trigger("sticky_kit:detach");
			}
		}
	}
	
		
	resize_sreen();	
	
	$(window).resize(function() {
	  	resize_sreen();
	});
	
	$(window).load(function() {
	  	resize_sreen();
	});	
	
	/***********************************************************************************/	
	
	$(".neo_click").click(function(){
		var val_name=$(this).attr("val_name");
		$('html,body').animate({scrollTop: Number($(val_name).offset().top)-50},'slow');
	});
	
	/***********************************************************************************/	
	
	if($(".swiper2").length){
		var swiper2 = new Swiper('.swiper2', {
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,					
			},
			autoplay: {
				delay: 10000,
			},
			speed: 1500,
			slidesPerView: 4,
			spaceBetween: 20,
			breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: "2%",
				},
				480: {
					slidesPerView: 2,
					spaceBetween: "3%",
				},
			}
		});
	}
	
	/***********************************************************************************/	
	
	if($(".wow").length){
		wow = new WOW({
			mobile	: false
		});
		wow.init();
	}	
	
	
	/***********************************************************************************/	
	
	/*if($("#header").length){
		$(window).scroll(function(){			
			if ($("#header").offset().top > 50) {
				$("#header").addClass("header_sroll");
			} 
			else {
				$("#header").removeClass("header_sroll");
			}
		});
	}
	*/
	/***********************************************************************************/
	
	if($(".fancybox_xg").length){
		$(".fancybox_xg").fancybox({
			width		: 380,
			maxWidth	: '100%',
			autoSize	: true,
			padding		: 20,
			fitToView	: false
		});
	}
	
	if($(".fancybox_xg2").length){
		$(".fancybox_xg2").fancybox({
			width		: 380,
			maxWidth	: '100%',
			autoSize	: true,
			padding		: 20,
			fitToView	: false
		});
	}
	
	if($(".fancy_vd_sb").length){
		$(".fancy_vd_sb").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
	
	if($(".fancybox-thumb").length){
		$(".fancybox-thumb").fancybox({
			padding: 10,
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'inside'
				},
				thumbs	: {
					width	: 70,
					height	: 70
				}
			}
		});
	}
	
	/***********************************************************************************/
	
	if($(".back_top_top").length){
		$(window).scroll(function(){
			if ($(this).scrollTop() != 0) {
				$('.back_top_top').fadeIn();
			} else {
				$('.back_top_top').fadeOut();
			}
		});
		$(".back_top_top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			});
		});
	}
	
	/***********************************************************************************/
	
	$(".icon_menu_mobile").click(function(e) {
		$val=$(".icon_menu_mobile").attr("val");
		if($val==0){
			$(".menu_mobile").attr("style","visibility: visible;");
			$(this).attr("val",1);
			$('body').attr("class","ad_body");
		}
	});
	$(".close_menu_mobile").click(function() {
		$(".menu_mobile").removeAttr("style");
		$(".icon_menu_mobile").attr("val",0);
		$('body').removeAttr("class");		
	});
	
	/***********************************************************************************/
	
	if($(".nav_mn").length){
		$(".nav_mn").navHighlighter();
	}		
	
});