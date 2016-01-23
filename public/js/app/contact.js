
define(['jqueryMobile'], function () {
	$('#contactList').on('pageshow', function(event, ui) {
		var listContainer = $('#contactList .item-list');

		if (listContainer.data('isLoaded')) {
			return;
		}

		$.mobile.loading('show', {
		  	text: '加载中，请稍后...',
		  	textVisible: true,
		  	theme: 'b'
		 });

		$.get('/contact/getAllList', function (res) {
			if (res.state) {
				var html = '';

				$.each(res.data, function(idx, item) {
					html += '<li>\
								<a href="#contactDetail" data-role="link" data-transition="slide" data-no="' + item.gh + '" class="ui-link">\
									<div class="icon">\
										<img src="/img/weixin.png">\
									</div>\
									<div class="text">\
										<p class="top-text">' + item.xingming + '</p>\
										<p class="bottom-text">' + item.CompanyMail + '@mail.maipu.com</p>\
									</div>\
								</a>\
							</li>';
				});

				$.mobile.loading('hide');
				listContainer.data('isLoaded', true).html(html);
			}
		});
	});

	$('#contactDetail').on('pageshow', function(event, ui) {
		console.log(event)
	});
});