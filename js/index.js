(function () {
	
	mixpanel.track("page-loaded");
		
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
	 * Case Study Manager
	 * ======================== */
	
	var caseStudiesPwd = [
		"../casestudies/casestudy05.html",
		"../casestudies/casestudy04.html",
		"../casestudies/casestudy03.html"
		//"../casestudies/casestudy01.html",
		//"../casestudies/casestudy02.html"
	];

	$.each( caseStudiesPwd, function( i, p ) {
		var caseStudy = $("<div/>");
		caseStudy.load(caseStudiesPwd[i]);
		$("#az-case-study").append(caseStudy);
		if (i != caseStudiesPwd.length-1) {
			$("#az-case-study").append("<br><hr><br>");
		}
	});
	
	/*
	$(".az-case-study-mini-container").each(function() {
		$(this).hover(function(){
			$(this).find(".az-case-study-mini-text").slideDown();
		}, function() {
			$(this).find(".az-case-study-mini-text").slideUp();
		});
	});
	*/
	
	/* ========================
	 * Tracking
	 * ======================== */
	 
	$( "[data-track='true']").each( function() {
		var name = $(this).attr('id');
		$(this).click( function() {
			appInsights.trackEvent(name);
			mixpanel.track(name);
		});
	});

})();