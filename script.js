	       jQuery(function(){
	           jQuery("a.youtube").YouTubePopUp();
	          jQuery("a.youtube-d").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
	      });

	       $(function () {
	           var $section = $('section');
	           $('#myCounter').mbComingsoon({ expiryDate: new Date(2017, 2, 28, 23), speed:100 });
	           setTimeout(function () {
	               $(window).resize();
	           }, 200);
	       });

	       $(function() {
	           $('a[href*="#"]:not([href="#"])').click(function() {
	               if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	                   var target = $(this.hash);
	                   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	                   if (target.length) {
	                       $('html, body').animate({
	                           scrollTop: target.offset().top
	                       }, 1000);
	                       return false;
	                   }
	               }
	           });
	       });
