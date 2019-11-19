// AOS START
$(function() {
    // AOS START
    AOS.init();
    // NAV CHECKBOX CLOSE
    $("nav a").on("click", function() {$(".menu_btn").click();});
    // STEP BUTTON
    $('.step .button_teiki').on("click", function() {$('.step #form').stop().fadeToggle(500);});
    // A TOP
	$('a[href^=#]').click(function() {
	  var speed = 400; // ミリ秒
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
	});
});