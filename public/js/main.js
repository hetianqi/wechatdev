require.config({
	baseUrl: '/js/',
	paths: {
		'jquery': 'lib/jquery-1.11.3.min',
		'jqueryMobile': '../jquery.mobile/jquery.mobile-1.4.5.min'
	}
});

if (typeof PAGE_CONFIG != 'undefined') {
	require(['app/' + PAGE_CONFIG.module + '/' + PAGE_CONFIG.page]);
}