$.fn.navHighlighter = function(options) {

	var settings = $.extend({
	    underlineColour: 'RGB(205, 153, 117)',
	    blur: "1px",
	    height: "3px"
	  }, options);
	

	// when we scroll down the window, do this:
	var topMenu = $(".nav_mn").offset().top;
	$(window).scroll(function(){
	
		var scrollMenu = $(window).scrollTop() - 0;
		if(scrollMenu > topMenu){
			$('.nav_mn').addClass('scrolling');
		} else {
			$('.nav_mn').removeClass('scrolling');
			$('.nav-active').removeClass('nav-active');
		}
		
	});

	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top - 48
	      }, 500);
	      return false;
	    }
	  }
	}); // smooth scroll courtesy of CSS-Tricks

	// apply the class of nav-active to the current nav link	
	$('.navHighlighter li a').on('click', function(e) {
		e.preventDefault();
		$('li.nav-active').removeClass('nav-active');
		$(this).parent('li').addClass('nav-active');
	});


	// get an array of 'href' of each a tag

	var navLink = $('ul.navHighlighter a');
	console.log(navLink);
	var aArray = [];

	for(var i = 0; i < navLink.length; i++) {
		console.log(i);
		var aChild = navLink[i];
		var navArray = $(aChild).attr('href');
		console.log(navArray);
		aArray.push(navArray);
		console.log(aArray);
		var selector = aArray.join(" , ");
		console.log(selector);
	}

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var tops = [];
		
		$(selector).each(function(){
			var top = $(this).position().top + 500;
			if(scrollTop > top) {
				var id = $(this).attr('id');
				$('.nav-active').removeClass('nav-active');
				$('a[href="#'+id+'"]').parent().addClass('nav-active');
			}
			tops.push(top);
		});

	});

	$('<style>.nav-active:after { background: ' +options.underlineColour+'; -webkit-filter: blur('+options.blur+'); height: '+options.height+'; } li:after { background: transparent; -webkit-filter: blur('+options.blur+'); height: '+options.height+'; } '+' li:hover:after { background: '+options.underlineColour+' !important; -website-filter: blur('+options.blur+'); height: '+options.height+'}; </style>').appendTo('body');		
}
