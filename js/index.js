(function () {
	
	var maxHeight = 0;
	setTimeout(function() {
	
		$("#carousel .item").each(function() {
			maxHeight = (maxHeight > $(this).height()) ? maxHeight : $(this).height();
			console.log(maxHeight);
		});
		$("#carousel .item").each(function() {
			$(this).height(maxHeight);
			console.log(maxHeight);
		})
		
		$('#carousel').carousel();
			
	}, 2000);
	
	/* ========================
	 * Navigation
	 * ======================== */
	 
	$( ".az-nav-link" ).each( function() {
		var id = $(this).attr( "data-id" );
		$(this).click( function() {
			$( window ).scrollTop( $("#"+id).offset().top - 60 );
		});
	});

	/* ========================
	 * Tracking
	 * ======================== */
	 
	$( "[data-track='true']").each( function() {
		var name = $(this).attr('id');
		$(this).click( function() {
			appInsights.trackEvent(name);
		});
	});
	
})();