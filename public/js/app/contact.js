
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

		$.get('/contact/getAllList', function(res) {
			if (res.state) {
				var html = '';

				$.each(res.data, function(idx, item) {
					html += '<li>\
								<a href="#contactDetail" data-role="link" data-transition="slide" data-gh="' + item.gh + '" class="ui-link">\
									<div class="icon">\
										<img src="/img/weixin.png">\
									</div>\
									<div class="text">\
										<p class="top-text">' + item.xingming + '</p>\
										<p class="bottom-text">' + item.bm + '</p>\
									</div>\
								</a>\
							</li>';
				});

				$.mobile.loading('hide');
				listContainer.data('isLoaded', true).html(html);
			}
		});
	});

	$('#contactList .item-list').on('tap', 'a', function() {
		var gh = $(this).data('gh');
		window.sessionStorage.setItem('gh', gh);
	});

	$('#contactDetail').on('pageshow', function(event, ui) {
		var gh = window.sessionStorage.getItem('gh');

		$.get('/contact/detail?gh=' + gh, function(res) {
			if (res.state) {
				var data = res.data;

				$('#contactDetail .yg-name').text(data.xingming);
				$('#contactDetail .yg-sex').text(data.sex == 1 ? '男' : '女');
				$('#contactDetail .yg-bm').text(data.bm);
				$('#contactDetail .yg-zw').text(data.zw || '无');
				$('#contactDetail .yg-mobile').text(data.mobile);
				$('#contactDetail .yg-tel').text(data.tel2 || '无');
				$('#callMobile').attr('href', 'tel:' + data.mobile);
			}
		});
	});
});