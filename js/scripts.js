$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	
	$("#whopper").click(function() {
/* 		$("nav").toggle(200); */
		$("nav").addClass("active");
		$("nav").slideDown(300);
		if(condition) {
			// code to be executed if condition is true
		} 
		else {
			// code to be executed if condition is false
		}
		

	});
});