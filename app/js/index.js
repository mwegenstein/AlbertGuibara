//Slow Scroll
$('#click').click(function(){
	$('html,body').animate({
		scrollTop: $('#portfolio-section').offset().top

	},900);
});
