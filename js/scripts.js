$(function() {
	var container = document.querySelector('#my-portfolio');
	var msnry;
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  msnry = new Masonry( container );
	});

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 300);
        return false;
      }
    }
  });
  
  var navopen = false;
  
  function flippinBurgerz(){
  		if(navopen == true) {
			$("nav").fadeOut(100);
			$("nav").removeClass("active");
			navopen = false;
		} 
		else {
			$("nav").fadeIn(100);
			$("nav").addClass("active");
			navopen = true;
		}
	}
	
	$("#whopper, nav a").click(flippinBurgerz);
	
});