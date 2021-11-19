$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});




jQuery(document).ready(function(){
	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();

		if (scroll >= 100) {
			jQuery("header").addClass("header-scrolled");
		}
		else{
			jQuery("header").removeClass("header-scrolled");
		}
	});
});