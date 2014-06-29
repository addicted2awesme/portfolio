$(function() {
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
});

$(document).ready(function(){
	var navopen = false;
	$("#whopper").click(function() {
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
	});
});