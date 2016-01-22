
define(['jqueryMobile'], function () {
	$('#contactList').on('pageshow', function(event, ui) {
		$.get('/contact/getAllList', function (res) {
			
		});
	});
});