$(function() {
	$('.desktop-device').on('click', function() {
		$('.site-preview').width(1200);
	})

	$('.tablet-device').on('click', function() {
		$('.site-preview').width(768);
	})

	$('.mobile-device').on('click', function() {
		$('.site-preview').width(320);
	})
})