$(function() {
	$('#desktop-device').on('click', function() {
		$('.site-preview').width(1200);
		$('[id$="-device"]').removeClass('active');
		$(this).addClass('active');
	})

	$('#tablet-device').on('click', function() {
		$('.site-preview').width(768);
		$('[id$="-device"]').removeClass('active');
		$(this).addClass('active');
	})

	$('#mobile-device').on('click', function() {
		$('.site-preview').width(320);
		$('[id$="-device"]').removeClass('active');
		$(this).addClass('active');
	})
})